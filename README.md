# Home Security System Builder

A responsive React application that allows users to build and customize a home security system through a multi-step builder with a live review panel.

## Features

- Multi-step accordion builder
- Responsive layout for desktop and mobile
- Dynamic product cards rendered from JSON data
- Variant (color) selection
- Quantity steppers synchronized across the builder and review panel
- Live order summary with:
  - Shipping
  - Savings
  - Total price
- Products grouped by category in the review panel
- Local persistence using Zustand Persist (localStorage)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Lucide React

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Project Structure

```
src/
 ├── components/
 ├── hooks/
 ├── store/
 ├── data/
 ├── types/
 ├── utils/
 └── layouts/
```

## Data

The application is fully data-driven.

All products and bundle steps are rendered from local JSON/TypeScript data instead of hardcoded UI.

## State Management

The application uses Zustand to manage the shopping cart.

The cart is persisted using Zustand Persist middleware with localStorage.

## Notes

- Product quantities stay synchronized between the product cards and the review panel.
- Each product variant maintains its own quantity.
- The review panel updates automatically as the configuration changes.
- The application is responsive across different screen sizes.

## Tradeoffs

- Product data is served from local static data instead of a backend API.
- The "Checkout" button is a placeholder and does not perform any checkout flow.

## Author

Eriny Anis