import { NextRequest, NextResponse } from 'next/server';

import { callbackRequestBody } from '@/app/(pages)/callback/types';
import { useAuthApi } from '@/apiRoutes/server';

export const POST = async (request: NextRequest) => {
    const authService = await useAuthApi();

    const body: callbackRequestBody = await request.json();

    try {
        const states = request.cookies.get('oauth_states');
        const updatedStates = states ? JSON.parse(states.value) : {};

        if (!updatedStates[body.state]) {
            throw new Error('Invalid state');
        }

        const codeVerifier = updatedStates[body.state].codeVerifier;
        const returnTo = updatedStates[body.state].returnTo;

        delete updatedStates[body.state];

        const result = await authService.TokenAuthorizationCodeRoute(
            body.code,
            codeVerifier,
            `${request.nextUrl.origin}/callback`
        );

        const response = NextResponse.json({
            redirectTo: returnTo || request.nextUrl.origin,
        });

        response.cookies.set('oauth_states', JSON.stringify(updatedStates), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        response.cookies.set('access_token', result.data.access_token);
        response.cookies.set('refresh_token', result.data.refresh_token);

        return response
    } catch (error) {
        console.error('Error during authentication:', error);
        return NextResponse.json({
            error: 'authentication_failed',
        }, { status: 500 });
    }
}