import { lazy } from "react";

const Home = lazy(() => import("../../views/app/homepage/Home"));

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
    meta: {
      layout: "BlankLayout",
      publicRoute:true
    },
  },
];

export default AppRoutes;