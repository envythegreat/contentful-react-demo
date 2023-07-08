import { lazy } from "react";

const Home = lazy(() => import("../../views/app/homepage/Home"));

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
    meta: {
      layout: "vertical",
    },
  },
];

export default AppRoutes;