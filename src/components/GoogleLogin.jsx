import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { setUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  //   google login
  const handleGoogleLogin = async () => {
    googleSignIn()
      .then(async (result) => {
        setUser(result.user);
        await axiosPublic.post("/users", {
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL,
          role: "student",
        });
        toast.success("Welcome Back");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="mt-[-12px] mx-8 mb-4 flex items-center justify-center gap-3 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-100"
    >
      <FcGoogle size={24} />
      <span className="text-gray-700 font-medium uppercase">
        Sign in with Google
      </span>
    </button>
  );
};

export default GoogleLogin;
