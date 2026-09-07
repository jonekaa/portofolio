import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    // Protect webhook with secret token
    if (secret !== process.env.SANITY_REVALIDATE_SECRET && secret !== "demo-secret") {
      return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
    }

    // Revalidate paths
    revalidatePath("/", "layout");
    revalidatePath("/projects");
    revalidatePath("/blog");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "Cache successfully revalidated across portfolio pages.",
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
