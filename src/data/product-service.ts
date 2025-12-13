import { Product } from "@/lib/types";
import { notFound } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products`, {
        cache: "no-store",
      });

      if (!res.ok) {
        if (res.status === 404) return notFound();
        const error: Error & { status?: number } = new Error(
          `Failed to fetch products list!`
        );
        error.status = res.status;
        throw error;
      }

      return await res.json();
    } catch (error) {
      throw error;
    }
  },

  getProductById: async (id: number): Promise<Product | null> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        next: { revalidate: 60 * 60 },
      });

      if (!res.ok) {
        if (res.status === 404) return notFound();
        const error: Error & { status?: number } = new Error(
          `Failed to fetch product ${id}!`
        );
        error.status = res.status;
        throw error;
      }

      return await res.json();
    } catch (error) {
      throw error;
    }
  },
};
