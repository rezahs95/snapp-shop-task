"use client";

import { useCart } from "@/context/CartContext";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header>
      <h1>تسک اسنپ شاپ</h1>
      <p>تعداد آیتم‌های سبد خرید: </p>
      <p>{totalItems}</p>
    </header>
  );
}
