import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact";
import FAQPage from "../pages/FAQPage";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import Home from "../pages/Home/Home";
import PvtRoute from "./PvtRoute";
import DashboardLayout from "../layout/DashboardLayout";

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
        element: <div>fdf</div>,
      },
      {
        path: "addTask",
        element: <div>ggg</div>,
      },
      {
        path: "taskManagement",
        element: <div>gggff</div>,
      },
    ],
  },
]);

export default router;
