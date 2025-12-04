import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// Lazy load route components for code-splitting
const App = lazy(() => import("./App"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div style={{padding:20}}>Loading app...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
        <NotFound />
      </Suspense>
    )
  },
  {
    path: "/product/:id",
    element: (
      <Suspense fallback={<div style={{padding:20}}>Loading product...</div>}>
        <ProductDetail />
      </Suspense>
    )
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div style={{padding:20}}>Loading cart...</div>}>
        <Cart />
      </Suspense>
    )
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<div style={{padding:20}}>Loading checkout...</div>}>
        <Checkout />
      </Suspense>
    )
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div style={{padding:20}}>Loading...</div>}>
        <NotFound />
      </Suspense>
    )
  }
]);

export default router;
