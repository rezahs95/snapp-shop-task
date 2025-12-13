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
    <section className={styles.cartModal}>
      <h2>سبد خرید</h2>
      {items.length > 0 ? (
        items.map((item: CartItem) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      ) : (
        <p>سبد خرید خالی است</p>
      )}
      <button onClick={() => setIsCartModalOpen(false)}>Close</button>
    </section>,
    document.body
  );
}
