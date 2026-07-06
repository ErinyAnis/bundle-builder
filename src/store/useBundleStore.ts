import { create } from "zustand";

import type { CartItem } from "../types";
import { isSameCartItem } from "../utils";

interface BundleStore {
  cart: CartItem[];

  addItem: (
    productId: string,

    variantId?: string,
  ) => void;

  decreaseItem: (
    productId: string,

    variantId?: string,
  ) => void;

  removeItem: (
    productId: string,

    variantId?: string,
  ) => void;
}

export const useBundleStore = create<BundleStore>()((set) => ({
  cart: [],

  addItem: (productId, variantId) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => isSameCartItem(item, productId, variantId)
      );

      if (!existingItem) {
        return {
          cart: [
            ...state.cart,
            {
              productId,
              variantId,
              quantity: 1,
            },
          ],
        };
      }

      return {
        cart: state.cart.map((item) =>
            isSameCartItem(item, productId, variantId)
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      };
    });
  },

  decreaseItem: (productId, variantId) => {
    set((state) => {
      const existingItem = state.cart.find(
        (item) => isSameCartItem(item, productId, variantId),
      );

      if (!existingItem) {
        return state;
      }

      if (existingItem.quantity === 1) {
        return {
          cart: state.cart.filter(
            (item) =>
              !isSameCartItem(item, productId, variantId),
          ),
        };
      }

      return {
        cart: state.cart.map((item) =>
          isSameCartItem(item, productId, variantId)
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      };
    });
  },

  removeItem: (productId, variantId) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) =>
          !isSameCartItem(item, productId, variantId),
      ),
    }));
  },
}));
