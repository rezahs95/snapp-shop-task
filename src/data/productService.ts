import { Product } from "@/lib/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(
          `Service Error: Failed to fetch products (Status: ${res.status})`
        );
      }

      return await res.json();
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },

  getProductById: async (id: number): Promise<Product | null> => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/products/${id}`, {
        next: { revalidate: 60 * 60 },
      });

      if (res.status === 404) return null;

      if (!res.ok) {
        throw new Error(`Service Error: Failed to fetch product ${id}`);
      }

      return await res.json();
    } catch (error) {
      console.error(`Failed to fetch product ${id}:`, error);
      return null;
    }
  },
};
