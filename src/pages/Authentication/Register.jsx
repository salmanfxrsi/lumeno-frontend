import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import register_lottie from "../../assets/Authentication/register_lottie.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import { GiArchiveRegister } from "react-icons/gi";
import GoogleLogin from "../../components/GoogleLogin";
import GithubLogin from "../../components/GithubLogin";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { signUp, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [role, setRole] = useState("student");
    const axiosPublic = useAxiosPublic();

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const from = location?.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const image = form.image.value;
        const password = form.password.value;
        signUp(email, password)
            .then(async (result) => {
                try {
                    const userData = { email, name, image, role };
                    await axiosPublic.post("/users", userData);
                } catch (error) {
                    toast.error(error.message)
                }
                setUser(result.user);
                toast.success("Sign In Successful");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="hero py-36">
            <Helmet>
                <title>Registration | Lumeno</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-[700px]">
                    <Lottie animationData={register_lottie}></Lottie>
                </div>
                <div className="card w-full max-w-2xl shrink-0 ">
                    <form
                        onSubmit={handleSubmit}
                        className="card-body grid grid-cols-1 lg:grid-cols-2"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-[#444444]">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                autoComplete="off"
                                className="input input-bordered bg-[#FFFFFF] rounded-lg border border-[#D0D0D0] font-serif"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-[#444444]">Image URL</span>
                            </label>
                            <input
                                type="url"
                                placeholder="Image URL"
                                name="image"
                                autoComplete="off"
                                className="input input-bordered bg-[#FFFFFF] rounded-lg border border-[#D0D0D0] font-serif"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-[#444444]">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                autoComplete="off"
                                className="input input-bordered bg-[#FFFFFF] rounded-lg border border-[#D0D0D0] font-serif"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold text-[#444444]">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <select
                                id="role"
                                name="role"
                                value={role}
                                onChange={handleRoleChange}
                                className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="student">Student</option>
                                <option value="tutor">Tutor</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="flex justify-center items-center gap-2 bg-[#ABEF5F] font-black uppercase px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none">
                                <h1>Register Now</h1>
                                <GiArchiveRegister className="text-xl" />
                            </button>
                        </div>
                    </form>
                    <h1 className="text-center font-serif font-medium -mt-5 mb-6">
                        Old here?{" "}
                        <Link to="/login" className="font-bold">
                            Login Now
                        </Link>
                    </h1>
                    {/* Google Login Button */}
                    <div className="grid grid-cols-2">
                        <GoogleLogin />
                        <GithubLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;