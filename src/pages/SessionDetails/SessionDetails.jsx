import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loading";
import { MdOutlineMenuBook } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { GoCodeReview } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SessionDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: session = {}, isLoading } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/sessions/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="w-11/12 lg:container mx-auto grid grid-cols-2 gap-12 py-36">
      {/* Session Details */}
      <div className="px-8 py-12 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-semibold">{session.sessionTitle}</h2>
          {session.registrationFee === 0 && (
            <div className="bg-[#ABEF5F] font-bold px-3 rounded-2xl">Free</div>
          )}
          {session.registrationFee > 0 && (
            <div className="bg-[#ABEF5F] font-bold px-3 rounded-2xl">
              {session.registrationFee} $
            </div>
          )}
        </div>
        <p className="text-lg mb-3">{session.sessionDescription}</p>
        <h2 className="text-2xl font-semibold">
          Tutor Name: {session.tutorName}
        </h2>
        <p className="text-lg mt-4">
          <span className="font-bold">Registration Period:</span>{" "}
          {session.registrationStartDate} To {session.registrationEndDate}
        </p>
        <p className="text-lg">
          <span className="font-bold">Class Start On:</span>{" "}
          {session.classStartTime}
        </p>
        {/*  */}
        <button className="animate-bounce flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none mt-8">
          <h1>Book Now</h1>
          <MdOutlineMenuBook className="text-xl" />
        </button>
      </div>
      {/* Session Reviews */}
      <div className="px-4 bg-white rounded-md shadow-md md:min-h-[350px]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-32"
        >
          {session.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="px-24">
                <div className="flex items-center gap-1 font-bold mb-3 text-2xl">
                  <GoCodeReview className="text-" />
                  <h1>Reviews</h1>
                </div>
                <div className="p">
                  <h1 className="font-bold text-2xl">{review.studentName}</h1>
                  <p className="font-semibold">{review.email}</p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Review:</span> {review.review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Session Details */}
    </div>
  );
};

export default SessionDetails;
