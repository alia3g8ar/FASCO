import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../../../types/product";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<{ items: Product[]; total: number }> => {
      const res = await axios.get("/api/products");
      return res.data;
    },
  });
};
