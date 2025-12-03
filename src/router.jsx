import { createBrowserRouter } from "react-router-dom";

// Components
import App from "./App";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />, // App will show Header + ProductList
    errorElement: <NotFound />, // fallback UI
  },
  {
    path: "/product/:id", // dynamic product route
    element: <ProductDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*", // unknown URLs
    element: <NotFound />,
  },
]);
