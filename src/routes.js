import { Outlet } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "./layouts/dashboard";

import DashboardAppPage from "./pages/DashboardAppPage";

export default function Router() {
  const routes = useRoutes([
    {
      element: <Outlet />,
      children: [{ element: <Navigate to="/dashboard" />, index: true }],
    },
  ]);

  return routes;
}
