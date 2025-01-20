import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const HomeTutorShowcase = () => {
  const axiosPublic = useAxiosPublic();

  const { data: tutors = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/tutors");
      return data;
    },
  });
  console.log(tutors);

  return (
    <div>
      <Marquee>
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="card bg-base-100 image-full w-96 shadow-xl h-[226px] mr-24"
          >
            <figure>
              <img
                src={tutor?.image}
                className=" w-full object-top"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {(tutor.name && tutor?.name) || "Unknown"}
              </h2>
              <p>Email: {tutor?.email}</p>
              <div className="card-actions justify-center">
                <div className="bg-[#ABEF5F] text-black px-4 py-2 rounded-lg uppercase font-semibold">
                  Our Tutor
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HomeTutorShowcase;
