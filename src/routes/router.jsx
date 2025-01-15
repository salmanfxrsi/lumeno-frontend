import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Sessions from "../pages/Sessions/Sessions";
import Error from "../components/Error";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import SessionDetails from "../pages/SessionDetails/SessionDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../pages/Admin/All Users/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sessions",
        element: <Sessions />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "sessions/:id",
        element: <SessionDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
