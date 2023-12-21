import { FaGithub } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const GitLogin = () => {
  const { gitLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/dashboard";

  const handleGitLogin = () => {
    gitLogin()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Thank You",
          text: "GitHub Login was Succesful",
          showConfirmButton: false,
          timer: 1500,
        });

        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          image: result.user?.photoURL,
          role: "user",
        };
        navigate(from, { replace: true });
        axiosPublic.post("/users", userInfo).then(() => {});
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "GitHub Login is Incomplete",
        });
      });
  };
  return (
    <div
      onClick={handleGitLogin}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-[#e8e8e8] border-rounded cursor-pointer"
    >
      <FaGithub size={32} />

      <p>Continue with GitHub</p>
    </div>
  );
};

export default GitLogin;
