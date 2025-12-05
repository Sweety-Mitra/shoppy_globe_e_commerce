import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy imports
const App = lazy(() => import("./App")); // This contains Header + <Outlet />
const Home = lazy(() => import("./components/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./components/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div style={{ padding: 20 }}>Loading App...</div>}>
        <App />
      </Suspense>
    ),

    errorElement: (
      <Suspense fallback={<div style={{ padding: 20 }}>Loading error...</div>}>
        <NotFound />
      </Suspense>
    ),

    // CHILD ROUTES inside <Outlet /> of App.jsx
    children: [
      {
        index: true, // instead of path: "/"
        element: (
          <Suspense fallback={<div style={{ padding: 20 }}>Loading home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<div style={{ padding: 20 }}>Loading product...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div style={{ padding: 20 }}>Loading cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<div style={{ padding: 20 }}>Loading checkout...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },

  // Unmatched route (404)
  {
    path: "*",
    element: (
      <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
