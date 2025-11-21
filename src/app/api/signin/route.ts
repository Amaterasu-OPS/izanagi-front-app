import { NextRequest, NextResponse } from 'next/server';
import { generateCodeChallenge, generateCodeVerifier } from '@/utils/oauth';

import { useAuthApi } from '@/apiRoutes/server';

export const POST = async (request: NextRequest) => {
    const authService = await useAuthApi();

    const state = crypto.randomUUID();
    const callbackUrl = `${request.nextUrl.origin}/callback`;
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    const body: { returnTo: string } = await request.json();

    try {
        const result = await authService.PARRoute(state, codeChallenge, callbackUrl);
        const states = request.cookies.get('oauth_states');
        const updatedStates = states ? JSON.parse(states.value) : {};

        updatedStates[state] = {
            codeVerifier: codeVerifier,
            returnTo: body.returnTo,
            createdAt: Date.now()
        };

        const response = NextResponse.json({
            redirectUrl: authService.getAuthorizeUrl(result.data.request_uri),
        });

        response.cookies.set('oauth_states', JSON.stringify(updatedStates), {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return response;
    } catch (error) {
        console.error('Error during authentication:', error);
        return NextResponse.json({
            error: 'authentication_failed',
        }, { status: 500 });
    }
}