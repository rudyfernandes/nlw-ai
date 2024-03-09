import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const redirectURL = new URL('/', request.url)

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30

    return NextResponse.redirect(redirectURL, {
        headers: {
            'Set-Cookie': `token=; Path=/; max-age=0;`
        }
    })

}