import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await prisma.test_post.create({
    data: {},
  });
  return NextResponse.json({ message: 'ok' });
}
