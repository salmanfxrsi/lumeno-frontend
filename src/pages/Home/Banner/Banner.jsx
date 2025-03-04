import { SiObsstudio } from "react-icons/si";
import bg_banner from "../../../assets/Home/bg_banner.jpg";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="hero h-[700px] bg-bottom object-cover"
      style={{
        backgroundImage: `url(${bg_banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Illuminate Your Learning Journey with Lumeno
          </h1>
          <p className="mb-5">
            Connect with tutors, collaborate with peers, and enhance your study
            experience with Lumeno. Our platform streamlines study session
            scheduling, resource sharing, and user management, empowering
            students, tutors, and administrators to work together seamlessly.
            Dive into a new era of collaborative education and unlock your full
            potential today!
          </p>
          <Link to='sessions' className="flex items-center gap-1.5 bg-[#ABEF5F] font-black uppercase w-[170px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center">
            <h1>Learn Now</h1>
            <SiObsstudio className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
