import { promises as fs } from 'node:fs';
import path from 'node:path';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'apple-app-site-association');
    const fileContent = await fs.readFile(filePath, 'utf8');
    return new NextResponse(fileContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': 'inline',
      },
    });
  } catch {
    return new NextResponse(JSON.stringify({ error: 'File not found' }), { status: 404 });
  }
}
