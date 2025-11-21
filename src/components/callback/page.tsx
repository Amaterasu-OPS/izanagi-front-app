'use client';

import { Flex, Loader } from 'amaterasu-freyja-ui-design-system'

import { useEffect } from 'react';
import { useSSRApiClient } from '@/apiRoutes/client';

type CallbackComponentPageProps = {
    code?: string;
    state?: string;
}

export const CallbackComponentPage = ({ code, state }: CallbackComponentPageProps) => {
    const { callbackRoute } = useSSRApiClient();

    const handleCallback = async () => {
        if (code && state) {
            try {
                const response = await callbackRoute(code, state);
                window.location.href = response.data.redirectTo;
            } catch {
                window.location.href = '/?error=callback_failed';
            }
        }
    }

    useEffect(() => {
        handleCallback();
    }, [code, state]);

    return <Flex
        style={{
            width: '100vw',
            height: '100vh',
        }}
        justifyContent='center'
        alignItems='center'
    >
        <Loader size={{
            width: 100,
            height: 100,
        }} isBackgroundColor={false} />
    </Flex>
}