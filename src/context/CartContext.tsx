"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Product, CartItem } from "@/lib/types";
import { useMounted } from "@/hooks/useMounted";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeOneFromCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartModalOpen: boolean;
  setIsCartModalOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (!mounted) return;
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItems(JSON.parse(storedItems));
    }
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items, mounted]);

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== "cartItems") return;
      if (!e.newValue) {
        setItems([]);
        return;
      }
      try {
        const parsed = JSON.parse(e.newValue);
        setItems(parsed);
      } catch {
        setItems([]);
      }
    }

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeOneFromCart = (product: Product) => {
    setItems((prevItems) => {
      return prevItems
        .map((item: CartItem) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item: CartItem) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeOneFromCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
