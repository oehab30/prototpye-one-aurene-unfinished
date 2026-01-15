import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/apiClient";
import { type Product } from "../../types/apiproduct";

export function useProducts() {
   return useQuery<Product[]>({
    queryKey: ["getproduct"],
    queryFn: async () => {
      const res = await api.get("/products");
      const data = res.data;
      if (Array.isArray(data)) return data;
      return data.products || [];
    },
  });
}
