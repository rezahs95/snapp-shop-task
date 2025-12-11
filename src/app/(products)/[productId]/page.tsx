import { productService } from "@/data/productService";
import { PDPClient } from "./client";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PDP({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  const product = await productService.getProductById(productId);
  if (!product) return notFound();

  return (
    <>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={100}
        height={100}
      />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <PDPClient product={product} />
    </>
  );
}
