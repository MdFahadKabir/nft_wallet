import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req) {
    if (req.nextUrl.pathname === '/') {
        try {
            console.log('middleware triggered')
        } catch (err) {
            console.error(err)
        }
    }
    return NextResponse.next()
}

export const matcher = {
    matcher: ['/'],
}