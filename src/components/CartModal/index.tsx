"use client";

import { createPortal } from "react-dom";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/lib/types";
import styles from "./cart-modal.module.css";
import { useMounted } from "@/hooks/useMounted";

export function CartModal() {
  const mounted = useMounted();
  const { items, isCartModalOpen, setIsCartModalOpen } = useCart();

  if (!isCartModalOpen || !mounted) return null;

  return createPortal(
    <div className={styles.cartModal}>
      <h1>Cart</h1>
      {items.length > 0 ? (
        items.map((item: CartItem) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      ) : (
        <p>سبد خرید خالی است</p>
      )}
      <button onClick={() => setIsCartModalOpen(false)}>Close</button>
    </div>,
    document.body
  );
}
