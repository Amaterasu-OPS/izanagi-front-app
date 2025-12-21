import { NextRequest, NextResponse } from 'next/server'

import { UNAUTHENTICATED_ROUTES } from './app/constants'
import { isAuthenticated } from '@/utils/auth'

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.json$).*)',
    ],
}

export function proxy(req: NextRequest) {
    const path = decodeURIComponent(req.nextUrl.pathname).split('?')[0];
    if (isAuthenticated(req) && UNAUTHENTICATED_ROUTES.includes(path)) {
        const url = req.nextUrl.clone()
        url.pathname = '/home'
        return NextResponse.redirect(url)
    }

    if (!isAuthenticated(req) && !UNAUTHENTICATED_ROUTES.includes(path)) {
        return NextResponse.redirect(req.nextUrl.origin + '/?redirectUrl=' + encodeURIComponent(req.nextUrl.pathname))
    }

    return NextResponse.next()
}