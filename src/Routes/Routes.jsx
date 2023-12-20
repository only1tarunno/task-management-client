import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Contact from "../pages/Contact";
import FAQPage from "../pages/FAQPage";
import Login from "../pages/Login";
import Resgister from "../pages/Resgister";
import Home from "../pages/Home/Home";

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
]);

export default router;
