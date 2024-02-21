import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notes = await db.user.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
