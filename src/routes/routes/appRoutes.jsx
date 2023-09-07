import { lazy } from "react";

const Home = lazy(() => import("../../views/app/homepage/Home"));
const ProductDetails = lazy(() => import("../../views/app/ProductDetails"));
const Cart = lazy(() => import("../../views/app/Cart/Cart"))

const AppRoutes = [
  {
    path: "/:lang/:category/:catid",
    element: <Home />,
    meta: {
      layout: "blank",
      publicRoute:true
    },
  },
  {
    path: "/",
    element: <Home />,
    meta: {
      layout: "blank",
      publicRoute:true
    },
  },
  {
    path:'/product-details/:slug',
    element: <ProductDetails />,
    meta: {
      layout: "blank",
      publicRoute: true
    }
  },
  {
    path:'/cart',
    element: <Cart />,
    meta: {
      layout: "blank",
      publicRoute: true
    }
  }
];

export default AppRoutes;