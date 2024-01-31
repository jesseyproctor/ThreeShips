import { NextRequest, NextResponse } from "next/server";
import fsPromises from 'fs/promises';
import path from 'path'
// import { IServiceProvider  } from '../../../public/types/serviceProvider'

const providersPath = path.join(process.cwd(), 'public/mocks/providers.json')

export async function GET() {
    try {
        const providers = await fsPromises.readFile(providersPath, 'utf-8')
        const json = JSON.parse(providers)
        return NextResponse.json(json)
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "No providers found!" }),
            { status: 404, headers: { 'content-type': 'application/json' } });
    }
}