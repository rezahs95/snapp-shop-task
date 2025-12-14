import { Product } from "@/lib/types";
import Link from "next/link";
import styles from "./plp.module.css";
import Image from "next/image";
import { productService } from "@/data/product-service";
import { Metadata } from "next";
import { Card } from "@mui/material";
import { priceFormat } from "@/lib/price-format";

export const metadata: Metadata = {
  title: "محصولات",
  description: "صفحه محصولات",
};

export default async function PLP() {
  const products = await productService.getAllProducts();

  return (
    <main className={styles.main}>
      {products.length > 0 &&
        products.map((product: Product) => (
          <Link
            href={`/${product.id}`}
            key={product.id}
            className={styles.productLink}
          >
            <Card variant="outlined" className={styles.productCard}>
              <div className={styles.productImage}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{priceFormat(product.price)}</p>
              </div>
            </Card>
          </Link>
        ))}
    </main>
  );
}
