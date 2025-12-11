"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

export function PDPClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>افزودن به سبد خرید</button>
    </>
  );
}
