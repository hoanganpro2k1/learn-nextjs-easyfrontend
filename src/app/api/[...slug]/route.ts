import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
	console.log('Context:', res)
	console.log('url:', req.nextUrl.pathname)
	return NextResponse.json({ massage: 'Hello from GET id slug' })
}
