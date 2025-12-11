import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return NextResponse.json(mockProducts);
}
