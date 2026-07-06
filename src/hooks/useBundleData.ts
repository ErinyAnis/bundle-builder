import data from "../data/products.json";
import type { BundleData } from "../types";

export function useBundleData(): BundleData {
  return data as BundleData;
}