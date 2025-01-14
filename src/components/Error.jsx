import Lottie from "lottie-react";
import error_lottie from "../assets/error_lottie.json";
import { IoIosSettings } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 py-36">
      <Helmet>
        <title>404 | Lumeno</title>
      </Helmet>
      <div>
        <h1 className="uppercase font-black text-5xl mb-8 hidden lg:block">
          Page Not Found
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mt-8 flex justify-center mx-auto items-center gap-1 bg-red-500 font-black uppercase w-full lg:w-[180px] px-5 py-3 text-sm text-white transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none animate-pulse"
        >
          <h1>Back To Home</h1>
          <IoIosSettings className="text-xl animate-spin" />
        </button>
      </div>
      <div className="w-full lg:w-[550px]">
        <Lottie animationData={error_lottie}></Lottie>
      </div>
    </div>
  );
};

export default Error;
