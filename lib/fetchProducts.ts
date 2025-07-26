// lib/fetchProduct.ts
import { ApiResponse } from "../types/product";

export async function fetchProduct(lang: "en" | "bn" = "en"): Promise<ApiResponse> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const json = await res.json();
  return json as ApiResponse;
}
