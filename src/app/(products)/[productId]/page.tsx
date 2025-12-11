import { Product } from "@/lib/types";
import { PDPClient } from "./client";

async function getProduct(productId: string): Promise<Product> {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json() as Promise<Product>;
}

export default async function PDP({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProduct(productId);

  return (
    <>
      <PDPClient product={product} />
    </>
  );
}
