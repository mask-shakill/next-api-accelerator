import { dbConnect } from "@/dbConfig/dbConfig";
import Post from "@/models/Post";
import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
  try {
    const { name, email, file } = await request.json();
    await dbConnect();
    const result = new Post({ name, email, file });
    await result.save();
    return new NextResponse(result);
  } catch (err: any) {
    console.log(err.message);
  }
};
