import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "wyze-cam-v4",

    stepId: "cameras",

    category: "Cameras",

    title: "Wyze Cam v4",

    description: "The clearest Wyze Cam ever made.",

    image: "/images/wyze-cam-v4.png",

    badge: "Save 22%",

    compareAtPrice: 35.98,

    price: 27.98,

    learnMoreUrl: "#",

    defaultVariant: "black",

    variants: [
      {
        id: "white",

        label: "White",

        swatch: "#ffffff",
      },

      {
        id: "grey",

        label: "Grey",

        swatch: "#9CA3AF",
      },

      {
        id: "black",

        label: "Black",

        swatch: "#111827",
      },
    ],
  },
];