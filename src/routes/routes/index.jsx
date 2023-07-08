// ** React Imports
import { Fragment } from "react";

// ** Routes Imports
import appRoutes from "./appRoutes";

// ** Layouts
import BlankLayout from "../../layouts/BlankLayout";

// ** Route Components
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

const getLayout = {
  blank: <BlankLayout />,
};

// ** Default Route
const DefaultRoute = "/";

// ** Document title
const TemplateTitle = "App Name";

// ** Merge Routes
const Routes = [...appRoutes,];

// ** Return Filtered Array of Routes & Paths

const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    console.log();
    Routes.filter((route) => {
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        let RouteTag = PrivateRoute;

        // ** Check for public or private route
        if (route.meta) {
          RouteTag = route.meta.publicRoute ? PublicRoute : PrivateRoute;
        }
        if (route.element) {
          route.element = (
            <Fragment>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Fragment>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = () => {
  const AllRoutes = [];
  const layouts = ["blank"];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, "blank");

    AllRoutes.push({
      path: "/",
      children: LayoutRoutes,
      element: getLayout[layoutItem],
    });
  });

  return AllRoutes;
};

export { Routes, getRoutes, DefaultRoute, TemplateTitle };
