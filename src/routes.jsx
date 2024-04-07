import Index from "./pages/Index/Index";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Blog from "./pages/Blog/Blog";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product-details/:productID", element: <ProductDetails /> },
  { path: "/blog", element: <Blog /> },
];

export default routes;