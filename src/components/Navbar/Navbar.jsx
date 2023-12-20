import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "../shared/Container";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then(navigate("/login")).catch();
  };
  return (
    <div className="bg-white py-5 border-[#eaeaea]">
      <Container>
        <div className="drawer relative z-50">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full px-0 navbar ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 justify-center lg:justify-start lg:flex-none lg:w-1/4">
                <h2 className="text-4xl lg:text-5xl font-bold">TimeCraft</h2>
              </div>
              <div className="flex-none hidden lg:block lg:flex-1 text-center">
                <ul className="menu menu-horizontal text-[#333]">
                  {/* Navbar menu content here */}
                  {links}
                </ul>
              </div>
              {/* button start here  */}
              <div className="w-1/4 justify-end">
                {/* ---------check if user login they see profile------------- */}
                {user ? (
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar hover:border-none hover:bg-transparent"
                      >
                        <div className="w-8 h-8 rounded-[50%] object-cover">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded px-3"
                      >
                        <li>
                          <Link
                            style={{ textTransform: "capitalize" }}
                            to={"/dashboard/userDashboard"}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogOut}
                            className="hover:bg-transparent hover:text-[#d88531] rounded-sm"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => navigate("/login")}
                      className="btn  bg-[#d88531] border-[#d88531] px-4 lg:px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
                    >
                      Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 relative z-50">
              {/* Sidebar content here */}
              {links}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
