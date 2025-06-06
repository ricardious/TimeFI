import { createBrowserRouter, RouteObject } from "react-router-dom";
import routesConstants from "@lib/constants/routeConstants";
import LayoutContainer from "@components/templates/LayoutContainer";
import Home from "../pages/HomeScreen";

const routes: RouteObject[] = [
  {
    path: routesConstants.ROOT,
    element: <LayoutContainer />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
