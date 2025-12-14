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
      <section className={styles.productDetails}>
        <Card className={styles.productInfo}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className={styles.productImageContainer}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="100%"
            />
          </div>
        </Card>
        <Card className={styles.productActions}>
          <p>{priceFormat(product.price)}</p>
          <PDPClient product={product} />
        </Card>
      </section>
    )
  );
}
