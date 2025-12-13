import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET() {
  if (mockProducts.length === 0) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return NextResponse.json(mockProducts);
}
