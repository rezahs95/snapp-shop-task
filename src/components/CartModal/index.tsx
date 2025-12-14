"use client";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/lib/types";
import { useMounted } from "@/hooks/useMounted";
import { Divider, IconButton, Modal } from "@mui/material";
import { priceFormat } from "@/lib/price-format";
import { numberFormat } from "@/lib/number-format";
import { Add, DeleteForever, Remove, Close } from "@mui/icons-material";
import { toast } from "sonner";
import styles from "./cart-modal.module.css";

export function CartModal() {
  const mounted = useMounted();
  const {
    items,
    isCartModalOpen,
    setIsCartModalOpen,
    removeOneFromCart,
    addToCart,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
    toast.success("محصول با موفقیت از سبد خرید حذف شد");
  };

  if (!isCartModalOpen || !mounted) return null;

  return (
    <Modal
      open={isCartModalOpen}
      onClose={() => setIsCartModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <section className={styles.cartModal}>
        <section className={styles.cartModalHeader}>
          <h3>سبد خرید</h3>
          <IconButton onClick={() => setIsCartModalOpen(false)}>
            <Close color="primary" />
          </IconButton>
        </section>
        <Divider />
        {items.length > 0 ? (
          <>
            <section className={styles.cartModalContent}>
              {items.length > 0 &&
                items.map((item: CartItem) => (
                  <section key={item.id} className={styles.cartModalItem}>
                    <section className={styles.cartModalItemNameContainer}>
                      <IconButton onClick={() => handleRemoveFromCart(item.id)}>
                        <DeleteForever color="primary" />
                      </IconButton>
                      <h5 className={styles.cartModalItemName}>{item.name}</h5>
                    </section>
                    <section className={styles.cartModalItemActions}>
                      <IconButton onClick={() => addToCart(item)}>
                        <Add color="primary" />
                      </IconButton>
                      <p>{numberFormat(item.quantity)}</p>
                      <IconButton onClick={() => removeOneFromCart(item)}>
                        <Remove color="primary" />
                      </IconButton>
                    </section>
                    <p className={styles.cartModalItemPrice}>
                      {priceFormat(item.price)}
                    </p>
                  </section>
                ))}
            </section>
            <Divider />
            <section className={styles.cartModalItem}>
              <p className={styles.cartModalItemName}>مجموع محصولات</p>
              <p className={styles.cartModalItemActions}>
                {numberFormat(totalItems)}
              </p>
              <p className={styles.cartModalItemPrice}>
                {priceFormat(totalPrice)}
              </p>
            </section>
          </>
        ) : (
          <p className={styles.cartModalEmpty}>سبد خرید خالی است</p>
        )}
      </section>
    </Modal>
  );
}
