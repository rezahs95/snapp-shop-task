"use client";

import { useCart } from "@/context/CartContext";
import { CartModal } from "@/components";
import { useMounted } from "@/hooks/useMounted";
import styles from "./header.module.css";
import { IconButton, Link } from "@mui/material";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -1rem;
    right: -1.5rem;
  }
`;

export function Header() {
  const mounted = useMounted();
  const { totalItems, toggleCartModal } = useCart();
  const totalItemsText = mounted ? totalItems : "...";

  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>تسک اسنپ شاپ</h1>
        </Link>
        <IconButton onClick={toggleCartModal}>
          <ShoppingCartIcon style={{ color: "#ffffff" }} />
          {totalItems > 0 && (
            <CartBadge
              badgeContent={totalItemsText}
              overlap="circular"
              color="success"
            />
          )}
        </IconButton>
        <CartModal />
      </header>
    </>
  );
}
