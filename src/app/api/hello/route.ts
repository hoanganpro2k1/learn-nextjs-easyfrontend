import { NextRequest, NextResponse } from 'next/server'

export const GET = (req: NextRequest, res: Response) => {
	console.log('req:', req.nextUrl.searchParams.get('sort'))
	return NextResponse.json({ massage: 'Hello from GET' })
}

export async function POST(req: Request, res: Response) {
	return new Response('Hello with POST!', {
		status: 200,
	})
}
