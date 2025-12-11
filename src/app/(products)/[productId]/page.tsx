import { Product } from "@/lib/types";

async function getProduct(productId: string): Promise<Product> {
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json() as Promise<Product>;
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = await getProduct(productId);
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </>
  );
}
