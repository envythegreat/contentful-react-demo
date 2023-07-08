// ** Router imports
import { Navigate, useRoutes } from "react-router-dom";

// ** Utils
import { getUserData } from "../utility";

// ** GetRoutes
import { getRoutes, DefaultRoute } from "./routes";

const Router = () => {
  const allRoutes = getRoutes();
  console.log("allRoutes", allRoutes)
  const getHomeRoute = () => {
    const token = getUserData();
    if (token) {
      return DefaultRoute;
    } else {
      return "/signin";
    }
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
