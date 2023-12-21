import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact";
import FAQPage from "../pages/FAQPage";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import Home from "../pages/Home/Home";
import PvtRoute from "./PvtRoute";
import DashboardLayout from "../layout/DashboardLayout";
import AddTask from "../pages/Dashboard/AddTask";
import TaskMange from "../pages/Dashboard/TaskMange";
import UpdateTask from "../pages/Dashboard/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/faq",
        element: <FAQPage></FAQPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Resgister></Resgister>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PvtRoute>
        <DashboardLayout />
      </PvtRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <TaskMange></TaskMange>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "edit/:id",
        element: <UpdateTask></UpdateTask>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tasks/singleTask/${params.id}`),
      },
    ],
  },
]);

export default router;
