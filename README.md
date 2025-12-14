# Snapp Shop — Frontend Task

Stack: Next.js (App Router), React, TypeScript, MUI, CSS Modules, Node (API routes)

## Project Overview

This repository contains a solution for the Snapp Shop task. The goal is to implement a simple e-commerce interface with:

A Product Listing Page (PLP) at the root route

A Product Detail Page (PDP) with dynamic routing

A client-side shopping cart with global state (context)

Mock product data exposed by Next.js API routes

The UI is responsive and localized (Persian / RTL) with a minimal, clean design.

## Features Implemented

Product Listing (PLP) at / with product cards (image, name, price)

Product Detail (PDP) at /[productId] showing image, title, price, description

Add to Cart on PDP

Global cart using React Context (CartContext) with the following:

Add item, increment/decrement quantity

Cart badge in the header showing total items

Cart modal to view contents and adjust quantities

Next.js API routes serving mock data (/api/products, /api/products/[id])

Responsive layout and skeleton loaders while fetching

TypeScript applied across the codebase

## Tech Stack

Next.js (App Router)

React (functional components + hooks)

TypeScript

MUI (Material UI) for some components and iconography

CSS Modules for local styles

Node API routes (Next.js route.ts) for mock data

## Install

#### Prerequisites:

Node.js 18+ (LTS recommended)

pnpm, npm or yarn

run command: pnpm i

#### Run Locally (Development):

pnpm run dev

#### Build & Start (Production):

npm run build

npm run start

## Data Fetching Strategy & Justification

#### What is implemented:

API routes (/api/products, /api/products/:id) serve mock product data from src/data/mock-products.ts.

PLP calls productService.getAllProducts() which performs a fetch('/api/products').

PDP calls productService.getProductById(productId) which performs fetch('/api/products/${id}').

#### Current Cache Behavior:

The PLP currently uses fetch(..., { cache: 'no-store' }) to always fetch fresh data on every request (SSR). We can choose to use ISR for systems that don't change repeatedly over time and in a static shop that the products are the same all the time, we can choose SSG.

PDP uses a revalidate approach and ISR because one product barely have changes over time but in a system that products have changed price daily we could decrease the revalidate time or make it SSR.

## Shopping Cart State Management

#### Implementation:

Cart is implemented using React Context (CartContext) and a provider wrapping the app layout.
The context exposes methods: addToCart(product, qty), removeFromCart(productId), increaseQty(productId), decreaseQty(productId), clearCart() and a totalItems computed value.
A CartModal component reads from the context to show the cart contents and allow quantity changes.

#### Persistence:

Cart state can persist to localStorage so that cart persists across reloads and tabs.

#### Why Context:

Context is enough for this scope and matches the assignment requirements. For larger apps, we could swap to Zustand or Redux for more features.

## UX / UI Decisions

RTL support and Persian font (Vazirmatn) were used to match the UI language.

Skeleton loaders are used to indicate loading while fetching API data.

error.ts and not-found.ts's made to get all errors and tell the user about it.

Cart badge in header shows item count for quick visibility.

Modal shows cart items and allows quantity changes without navigation.

Sonner library shows a toast when adding an item to the cart or removing the item from cart.

Modal shows a cart total price and total items count.

## Performance & Optimization

Next.js <Image> usage for image optimizations (fill, sizes, loading, and qualities props).

TypeScript and modular code help maintainability.

## SEO

I added some random meta data on every page to see how we use Nextjs SEO module, we could add more data for SEO for example: robots, sitemap, icons, opengraph, and jsonld.

## Suggested Next Steps

Add search, pagination, filters, and sorting on PLP

Add unit/integration tests.

Improve A11y (ARIA labels and keyboard navigations)

Improve UX

## Limitations

The project structure could be feature-based structure but I assume it's not a big project, but we could put everything in the src/shared/ folder and everything specific to a fetaure in src/features/(feature-name), and after that we could add a design language system to implement atomic design system for the project and use our custom coponent instead of using MUI.

I had worked on the project, 3 out of 5 days so it could be better after working 2 another days on it.

Personally I prefer tailwind css but I tested to use css module because it was the prefered startegy in this task.

Thank you for the time you spend on this project

Wish you the best
