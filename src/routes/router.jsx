import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Sessions from "../pages/Sessions/Sessions";
import Error from "../components/Error";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import SessionDetails from "../pages/SessionDetails/SessionDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminManageUsers from "../pages/Admin/Admin Manage Users/AdminManageUsers";
import AdminManageSessions from "../pages/Admin/Admin Manage Sessions/AdminManageSessions";
import AdminUpdateSession from "../pages/Admin/Admin Manage Sessions/Admin Update  Session/AdminUpdateSession";
import TutorCreateSession from "../pages/Tutor/Tutor Create Session/TutorCreateSession";
import TutorManageSessions from "../pages/Tutor/TutorManageSessions/TutorManageSessions";
import StudentCreateNote from "../pages/Student/Student Create Note/StudentCreateNote";
import StudentManageNotes from "../pages/Student/Student Manage Notes/StudentManageNotes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

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
        element: (
          <PrivateRoutes>
            <SessionDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "admin-manage-users",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AdminManageUsers></AdminManageUsers>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "admin-manage-sessions",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AdminManageSessions></AdminManageSessions>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "admin-update-session/:id",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AdminUpdateSession></AdminUpdateSession>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "tutor-create-session",
        element: <TutorCreateSession></TutorCreateSession>,
      },
      {
        path: "student-booked-sessions",
        element: <TutorManageSessions></TutorManageSessions>,
      },
      {
        path: "student-create-note",
        element: <StudentCreateNote></StudentCreateNote>,
      },
      {
        path: "student-manage-notes",
        element: <StudentManageNotes></StudentManageNotes>,
      },
      {
        path: "student-view-study-materials",
        element: <TutorManageSessions></TutorManageSessions>,
      },
    ],
  },
]);

export default router;
