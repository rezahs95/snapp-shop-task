"use client";

import { createPortal } from "react-dom";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/lib/types";
import styles from "./cart-modal.module.css";
import { useMounted } from "@/hooks/useMounted";
import { Divider, IconButton, Modal } from "@mui/material";
import Close from "@mui/icons-material/Close";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { priceFormat } from "@/lib/price-format";
import { numberFormat } from "@/lib/number-format";

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

  return (
    <Modal
      open={isCartModalOpen}
      onClose={() => setIsCartModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.cartModal}>
        <div className={styles.cartModalHeader}>
          <h3>سبد خرید</h3>
          <IconButton onClick={() => setIsCartModalOpen(false)}>
            <Close color="primary" />
          </IconButton>
        </div>
        <Divider />
        <div className={styles.cartModalContent}>
          {items.length > 0 ? (
            items.map((item: CartItem) => (
              <div key={item.id} className={styles.cartModalItem}>
                <h5 className={styles.cartModalItemName}>{item.name}</h5>
                <div className={styles.cartModalItemActions}>
                  <IconButton onClick={() => addToCart(item)}>
                    <Add color="primary" />
                  </IconButton>
                  <p>{numberFormat(item.quantity)}</p>
                  <IconButton onClick={() => removeOneFromCart(item)}>
                    <Remove color="primary" />
                  </IconButton>
                </div>
                <p className={styles.cartModalItemPrice}>
                  {priceFormat(item.price)}
                </p>
              </div>
            ))
          ) : (
            <p className={styles.cartModalEmpty}>سبد خرید خالی است</p>
          )}
        </div>
      </div>
    </Modal>
  );
}
