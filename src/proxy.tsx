import { NextResponse } from 'next/server'

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.gif|.*\\.json$).*)',
    ],
}

export function proxy() {
    return NextResponse.next()
}