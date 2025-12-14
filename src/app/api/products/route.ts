import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET() {
  if (mockProducts.length === 0) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }
  return NextResponse.json(mockProducts);
}
