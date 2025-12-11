import { Product } from "@/lib/types";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import { productService } from "@/data/productService";

export default async function PLP() {
  const products = await productService.getAllProducts();

  return (
    <main>
      {products.map((product: Product) => (
        <Link
          href={`/${product.id}`}
          key={product.id}
          className={styles.product}
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={100}
            height={100}
          />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </Link>
      ))}
    </main>
  );
}
