"use client";

import { createPortal } from "react-dom";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/lib/types";
import styles from "./cart-modal.module.css";
import { useMounted } from "@/hooks/useMounted";
import { Card, IconButton } from "@mui/material";
import Close from "@mui/icons-material/Close";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

export function CartModal() {
  const mounted = useMounted();
  const {
    items,
    isCartModalOpen,
    setIsCartModalOpen,
    removeOneFromCart,
    addToCart,
  } = useCart();

  if (!isCartModalOpen || !mounted) return null;

  return createPortal(
    <div className={styles.cartModal}>
      <div className={styles.cartModalHeader}>
        <h3>سبد خرید</h3>
        <IconButton onClick={() => setIsCartModalOpen(false)}>
          <Close />
        </IconButton>
      </div>
      <div className={styles.cartModalContent}>
        {items.length > 0 ? (
          items.map((item: CartItem) => (
            <div key={item.id} className={styles.cartModalItem}>
              <div className={styles.cartModalItemName}>
                <h5>{item.name}</h5>
                <p>قیمت: {item.price}</p>
              </div>
              <div className={styles.cartModalItemActions}>
                <IconButton onClick={() => addToCart(item)}>
                  <Add />
                </IconButton>
                <p>{item.quantity}</p>
                <IconButton onClick={() => removeOneFromCart(item)}>
                  <Remove />
                </IconButton>
              </div>
            </div>
          ))
        ) : (
          <p>سبد خرید خالی است</p>
        )}
      </div>
    </div>,
    document.body
  );
}
