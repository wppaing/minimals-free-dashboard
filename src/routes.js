import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard";

import DashboardAppPage from "./pages/DashboardAppPage";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
      ],
    },
    {
      element: <div>Simple layout</div>,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: "404", element: <h1>404 page</h1> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
