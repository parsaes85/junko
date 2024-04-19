import Index from "./pages/Index/Index";
import Shop from "./pages/Shop/Shop";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Login from "./pages/Login/Login";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product-details/:productID", element: <ProductDetails /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog-details/:blogID", element: <BlogDetails /> },
  { path: "/login", element: <Login /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;