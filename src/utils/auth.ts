import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export const isAuthenticated = (req: NextRequest) => {
    const accessToken = req.cookies.get('access_token')
    const refreshToken = req.cookies.get('refresh_token')

    if (!accessToken || !refreshToken) {
        return false
    }

    if (isOpaqueToken(accessToken.value) || !isOpaqueToken(refreshToken.value)) {
        return false
    }

    try {
        jwt.decode(accessToken.value);
        return true
    } catch {
        return false
    }
}

const isOpaqueToken = (token: string) => {
    return token.split('.').length !== 3;
}