import { lazy } from "react";

const Home = lazy(() => import("../../views/app/homepage/Home"));
const ProductDetails = lazy(() => import("../../views/app/ProductDetails"));

const AppRoutes = [
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
  }
];

export default AppRoutes;