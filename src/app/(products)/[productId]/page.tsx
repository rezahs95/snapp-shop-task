import { productService } from "@/data/product-service";
import { PDPClient } from "./client";
import Image from "next/image";
import styles from "./pdp.module.css";
import { Card } from "@mui/material";
import { priceFormat } from "@/lib/price-format";

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
      <main className={styles.productDetails}>
        <Card className={styles.productInfo}>
          <h2>{product.name}</h2>
          <p style={{ textAlign: "justify" }}>{product.description}</p>
          <section className={styles.productImageContainer}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="100vw"
              loading="eager"
            />
          </section>
        </Card>
        <Card className={styles.productActions}>
          <p>{priceFormat(product.price)}</p>
          <PDPClient product={product} />
        </Card>
      </main>
    )
  );
}
