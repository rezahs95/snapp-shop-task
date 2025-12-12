"use client";

import { useCart } from "@/context/CartContext";
import { CartModal } from "./CartModal/CartModal";

export function Header() {
  const { totalItems, setIsCartModalOpen } = useCart();

  return (
    <>
      <header>
        <h1>تسک اسنپ شاپ</h1>
        <p>تعداد آیتم‌های سبد خرید: </p>
        <p>{totalItems}</p>
        <button onClick={() => setIsCartModalOpen(true)}>سبد خرید</button>
      </header>
      <CartModal />
    </>
  );
}
