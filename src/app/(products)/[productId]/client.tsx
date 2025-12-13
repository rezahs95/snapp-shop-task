"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import { Button } from "@mui/material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import styles from "./pdp.module.css";

export function PDPClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Button
      className={styles.addCartButton}
      variant="contained"
      color="primary"
      startIcon={<AddShoppingCart />}
      onClick={() => addToCart(product)}
    >
      افزودن به سبد خرید
    </Button>
  );
}
