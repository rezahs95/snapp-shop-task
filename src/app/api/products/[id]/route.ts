import { NextResponse } from "next/server";
import { mockProducts } from "@/data/mock-products";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const product = mockProducts.find((product) => product.id === parseInt(id));
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return NextResponse.json(product);
}
