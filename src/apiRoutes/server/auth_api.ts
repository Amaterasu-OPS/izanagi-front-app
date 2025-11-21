'use server';

import { PARResponse, TokenAuthorizationCodeResponse } from '@/types/auth';

import axios from 'axios';
import { isBrowser } from '@/utils/ssr';

export const useAuthApi = async () => {
    if (isBrowser) {
        throw new Error('useAuthApi can only be used on the server side.');
    }

    const api = axios.create({
        baseURL: process.env.AUTH_BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    api.interceptors.response.use(response => response, error => {
        console.error('Auth API error:', error.response?.data || error.message);
        return Promise.reject(error);
    });

    const PARRoute = async (state: string, codeChallenge: string, callbackPage: string) => {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID || '',
            client_secret: process.env.CLIENT_SECRET || '',
            scope: 'openid profile',
            redirect_uri: callbackPage,
            response_type: 'code',
            state: state,
            code_challenge: codeChallenge,
            code_challenge_method: 'S256'
        });

        return api.post<PARResponse>('/api/v1/auth/par', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    const TokenAuthorizationCodeRoute = async (code: string, codeVerifier: string, callbackPage: string) => {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID || '',
            client_secret: process.env.CLIENT_SECRET || '',
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: callbackPage,
            code_verifier: codeVerifier,
        });

        return api.post<TokenAuthorizationCodeResponse>('/api/v1/auth/token', params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    const getAuthorizeUrl = (uri: string) => {
        return `${process.env.AUTH_BASE_URL}/api/v1/auth/authorize?uri=${uri}&client_id=${process.env.CLIENT_ID}`;
    }

    return {
        PARRoute,
        getAuthorizeUrl,
        TokenAuthorizationCodeRoute,
    }
}