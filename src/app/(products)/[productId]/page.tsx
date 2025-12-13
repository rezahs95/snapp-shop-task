import { productService } from "@/data/product-service";
import { PDPClient } from "./client";
import Image from "next/image";
import styles from "./pdp.module.css";
import { Card } from "@mui/material";

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
      <section className={styles.productDetails}>
        <Card className={styles.productInfo}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
          />
        </Card>
        <Card className={styles.productActions}>
          <p>قیمت: {product.price}</p>
          <PDPClient product={product} />
        </Card>
      </section>
    )
  );
}
