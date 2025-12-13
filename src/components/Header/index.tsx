"use client";

import { useCart } from "@/context/CartContext";
import { CartModal } from "@/components";
import { useMounted } from "@/hooks/useMounted";

export function Header() {
  const mounted = useMounted();
  const { totalItems, setIsCartModalOpen } = useCart();

  return (
    <>
      <header>
        <h1>تسک اسنپ شاپ</h1>
        <p>تعداد آیتم‌های سبد خرید: </p>
        <p>{mounted ? totalItems : "..."}</p>
        <button onClick={() => setIsCartModalOpen(true)}>سبد خرید</button>
      </header>
      <CartModal />
    </>
  );
}
