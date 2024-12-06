import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewDoc = await db.aIOutput.create({
      data: {
        userId: userId,
        title: title,
        description: description,
        templateUsed,
      },
    });

    revalidatePath("/");

    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error: any) {
    console.error("Error during API call:", error.response?.data ?? error.message);
    return new NextResponse("POST AI GENERATE, NEW DOC ERROR", { status: 500 });
  }
}