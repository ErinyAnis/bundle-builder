import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "wyze-cam-v4",
    stepId: "cameras",
    category: "Cameras",

    title: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",

    image: "/images/products/wyze-cam-v4.png",

    badge: "Save 22%",

    compareAtPrice: 35.98,
    price: 27.98,

    learnMoreUrl: "#",

    defaultVariant: "white",

    variants: [
      {
        id: "white",
        label: "White",
        swatch: "#FFFFFF",
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

  {
    id: "wyze-cam-pan-v3",
    stepId: "cameras",
    category: "Cameras",

    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",

    image: "/images/products/Wyze-Cam-Pan-v3.png",

    badge: "Save 12%",

    compareAtPrice: 39.98,
    price: 34.98,

    learnMoreUrl: "#",

    defaultVariant: "white",

    variants: [
      {
        id: "white",
        label: "White",
        swatch: "#FFFFFF",
      },
      {
        id: "black",
        label: "Black",
        swatch: "#111827",
      },
    ],
  },

  {
    id: "wyze-cam-floodlight-v2",
    stepId: "cameras",
    category: "Cameras",

    title: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° view.",

    image: "/images/products/Wyze-Cam-Floodlight-v2.png",

    badge: "Save 22%",

    compareAtPrice: 89.98,
    price: 69.98,

    learnMoreUrl: "#",

    defaultVariant: "white",

    variants: [
      {
        id: "white",
        label: "White",
        swatch: "#FFFFFF",
      },
      {
        id: "black",
        label: "Black",
        swatch: "#111827",
      },
    ],
  },

  {
    id: "wyze-duo-doorbell",
    stepId: "cameras",
    category: "Cameras",

    title: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Double the porch protection.",

    image: "/images/products/Wyze-Duo-Cam-Doorbell.png",

    price: 69.98,

    learnMoreUrl: "#",

    defaultVariant: "",

    variants: [],
  },

  {
    id: "wyze-battery-cam-pro",
    stepId: "cameras",
    category: "Cameras",

    title: "Wyze Battery Cam Pro",
    description: "Protect anywhere. See everything in 2.5K HDR.",

    image: "/images/products/Wyze-Battery-Cam-Pro.png",

    price: 89.98,

    learnMoreUrl: "#",

    defaultVariant: "white",

    variants: [
      {
        id: "white",
        label: "White",
        swatch: "#FFFFFF",
      },
      {
        id: "black",
        label: "Black",
        swatch: "#111827",
      },
    ],
  },
];