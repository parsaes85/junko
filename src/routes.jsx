import Index from "./pages/Index/Index";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product-details/:productID", element: <ProductDetails /> },
];

export default routes;