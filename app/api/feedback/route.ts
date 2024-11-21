import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, text, createdAt } = body;

  await prisma.feedback.create({
    data: { userId, text, createdAt },
  });

  return NextResponse.json({}, { status: 200 });
}
