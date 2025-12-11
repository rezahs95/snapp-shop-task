"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";

export function PDPClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return <button onClick={() => addToCart(product)}>افزودن به سبد خرید</button>;
}
