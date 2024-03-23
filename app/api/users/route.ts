import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  return NextResponse.json({ message: "Hello, World!" });
};

export const POST = async (request: NextRequest) => {
  console.log('log the user in');
  return NextResponse.json(await request.json());
};
