import { Product } from "@/lib/types";
import Link from "next/link";
import styles from "./plp.module.css";
import Image from "next/image";
import { productService } from "@/data/product-service";
import { Metadata } from "next";
import { Card } from "@mui/material";

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
          <Card
            key={product.id}
            variant="outlined"
            className={styles.productCard}
          >
            <Link
              href={`/${product.id}`}
              key={product.id}
              className={styles.product}
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
              />
              <div className={styles.productInfo}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </Link>
          </Card>
        ))}
    </main>
  );
}
