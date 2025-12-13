import { productService } from "@/data/product-service";
import { PDPClient } from "./client";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  const product = await productService.getProductById(productId);

  return {
    title: product?.name,
    description: product?.description,
  };
}

export default async function PDP({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  const product = await productService.getProductById(productId);

  return (
    product && (
      <>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={100}
          height={100}
        />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <PDPClient product={product} />
      </>
    )
  );
}
