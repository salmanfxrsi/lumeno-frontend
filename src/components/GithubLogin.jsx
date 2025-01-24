import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const GithubLogin = () => {
    const { setUser, githubSignIn } = useAuth();
    const navigate = useNavigate();

    //   google login
    const handleGithubLogin = async () => {
        githubSignIn()
            .then((result) => {
                setUser(result.user);
                toast.success("Welcome Back");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <button
            onClick={handleGithubLogin}
            className="mt-[-12px] mx-8 mb-4 flex items-center justify-center gap-3 px-6 py-2 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out hover:bg-gray-100"
        >
            <FaGithub size={24} />
            <span className="text-gray-700 font-medium uppercase">
                Sign in with Github
            </span>
        </button>
    );
};

export default GithubLogin;
