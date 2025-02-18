import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLocation } from "react-router-dom";

const HomeTutorShowcase = () => {
  const axiosPublic = useAxiosPublic();
  const { pathname } = useLocation();

  const { data: tutors = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/tutors");
      return data;
    },
  });

  return (
    <div>
      {pathname !== "/tutors" && <h1 className="text-5xl font-bold mb-20">Dedicated Tutors</h1>}
      <div className="grid lg:grid-cols-2 gap-8">
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="w-full p-8 shadow-xl flex gap-8 rounded-xl"
          >
            {/* Image */}
            <div>
              <img className="w-24 h-24 rounded-lg" src={tutor.image} alt="" />
            </div>
            {/* Tutor Details */}
            <div>
              <h1 className="text-2xl font-bold">{tutor.name}</h1>
              <p className="font-bold mt-1">
                Email: <span className="font-medium">{tutor.email}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTutorShowcase;
