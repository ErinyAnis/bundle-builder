import {
  products,
  review,
  steps,
} from "../data";

export function useBundleData() {
  return {
    steps,
    products,
    review,
  };
}