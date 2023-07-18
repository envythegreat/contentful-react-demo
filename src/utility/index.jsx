import { DefaultRoute } from "../routes/routes";

// ** Check user role for redirect to excat Routes
export const getHomeRouteForLoggedInUser = (userRole) => {
  if (userRole === "admin") return DefaultRoute;
  if (userRole === "client") return "/access-control";
  return "/";
};

export const getUserData = () => localStorage.getItem("token");
