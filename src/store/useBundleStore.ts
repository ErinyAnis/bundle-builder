import { create } from "zustand";

import type { CartItem } from "../types";

interface BundleStore {

  cart: CartItem[];

  addItem: (
    productId:string,

    variantId?:string

  )=>void;

  decreaseItem:(

    productId:string,

    variantId?:string

  )=>void;

  removeItem:(

    productId:string,

    variantId?:string

  )=>void;

}

export const useBundleStore =
create<BundleStore>()(

(set)=>({

cart:[],

addItem:()=>{},

decreaseItem:()=>{},

removeItem:()=>{}

})
);