'use server';

import { UserinfoResponse } from '@/types/auth';
import axios from 'axios';
import { isBrowser } from '@/utils/ssr';

export const useAuthApiAuthenticated = async (accessToken: string) => {
    if (isBrowser) {
        throw new Error('useAuthApiAuthenticated can only be used on the server side.');
    }

    const api = axios.create({
        baseURL: process.env.AUTH_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': accessToken
        }
    });

    api.interceptors.response.use(response => response, error => {
        console.error('Auth API Authenticated error:', error.response?.data || error.message);
        return Promise.reject(error);
    });

    const UserinfoRouter = async (sub: string) => {
        const payload = {
            sub,
        }

        return api.post<UserinfoResponse>('/api/v1/auth/userinfo', payload);
    }

    return {
        UserinfoRouter,
    }
}