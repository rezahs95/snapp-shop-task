"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import { Button } from "@mui/material";
import { toast } from "sonner";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import styles from "./pdp.module.css";

export function PDPClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  };

  return (
    <Button
      className={styles.addCartButton}
      variant="contained"
      color="primary"
      startIcon={<AddShoppingCart />}
      onClick={handleAddToCart}
    >
      افزودن به سبد خرید
    </Button>
  );
}
