import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId } = body;

  const res = await prisma.user.create({
    data: { id: userId },
  });

  return NextResponse.json({ userId: res.id }, { status: 200 });
}
