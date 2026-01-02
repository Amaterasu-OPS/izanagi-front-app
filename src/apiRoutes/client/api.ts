'use client';

import axios from 'axios';
import { callbackResponse } from '@/types/callback/callbackResponse';

export const useSSRApiClient = () => {
    const api = axios.create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    api.interceptors.response.use(response => response, error => {
        console.error(`[CLIENT SIDE] API ${error.config?.url} error: ${error}`);
        return Promise.reject(error);
    });

    const signInRoute = (returnTo: string) => {
        return api.post<{redirectUrl: string}>('/signin', {
            returnTo
        });
    }

    const callbackRoute = (code: string, state: string) => {
        return api.post<callbackResponse>('/callback', {
            code,
            state
        });
    }

    return {
        signInRoute,
        callbackRoute
    }
}