import { Product } from "@/lib/types";
import Link from "next/link";
import styles from "./page.module.css";

async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json() as Promise<Product[]>;
}

export default async function PLP() {
  const products = await getProducts();

  return (
    <main>
      {products.map((product: Product) => (
        <Link
          href={`/${product.id}`}
          key={product.id}
          className={styles.product}
        >
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </Link>
      ))}
    </main>
  );
}
