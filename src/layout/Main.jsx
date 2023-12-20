import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
