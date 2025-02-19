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
import TutorRoutes from "./TutorRoutes";
import StudentRoutes from "./StudentRoutes";
import StudentBookedSessions from "../pages/Student/Student Booked Sessions/StudentBookedSessions";
import TutorUploadMaterials from "../pages/Tutor/Tutor Upload Materials/TutorUploadMaterials";
import TutorManageMaterials from "../pages/Tutor/Tutor Manage Materials/TutorManageMaterials";
import AdminManageStudyMaterials from "../pages/Admin/Admin Manage Study Materials/AdminManageStudyMaterials";
import StudentViewStudyMaterials from "../pages/Student/Student View Study Materials/StudentViewStudyMaterials";
import SessionMaterials from "../pages/SessionMaterials/SessionMaterials";
import Payment from "../components/Payment/Payment";
import Tutors from "../pages/Tutors/Tutors";
import MyProfile from "../pages/Dashboard/MyProfile";
import OverallStat from "../pages/Dashboard/OverallStat/OverallStat";

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
        path: "tutors",
        element: <Tutors />,
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
        path: "payment",
        element: <Payment />,
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
        index: true,
        element: <OverallStat></OverallStat>
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "session-materials/:id",
        element: <SessionMaterials></SessionMaterials>
      },
      // Admin Routes
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
        path: "admin-manage-study-materials",
        element: (
          <PrivateRoutes>
            <AdminRoutes>
              <AdminManageStudyMaterials></AdminManageStudyMaterials>
            </AdminRoutes>
          </PrivateRoutes>
        ),
      },
      // Tutor Routes
      {
        path: "tutor-create-session",
        element: (
          <PrivateRoutes>
            <TutorRoutes>
              <TutorCreateSession></TutorCreateSession>
            </TutorRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "tutor-manage-sessions",
        element: (
          <PrivateRoutes>
            <TutorRoutes>
              <TutorManageSessions></TutorManageSessions>
            </TutorRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "tutor-upload-materials",
        element: (
          <PrivateRoutes>
            <TutorRoutes>
              <TutorUploadMaterials></TutorUploadMaterials>
            </TutorRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "tutor-manage-materials",
        element: (
          <PrivateRoutes>
            <TutorRoutes>
              <TutorManageMaterials></TutorManageMaterials>
            </TutorRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "student-booked-sessions",
        element: (
          <PrivateRoutes>
            <StudentRoutes>
              <StudentBookedSessions></StudentBookedSessions>
            </StudentRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "student-view-study-materials",
        element: (
          <PrivateRoutes>
            <StudentRoutes>
              <StudentViewStudyMaterials></StudentViewStudyMaterials>
            </StudentRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "student-create-note",
        element: (
          <PrivateRoutes>
            <StudentRoutes>
              <StudentCreateNote></StudentCreateNote>
            </StudentRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "student-manage-notes",
        element: (
          <PrivateRoutes>
            <StudentRoutes>
              <StudentManageNotes></StudentManageNotes>
            </StudentRoutes>
          </PrivateRoutes>
        ),
      },
      {
        path: "student-view-study-materials",
      },
    ],
  },
]);

export default router;
