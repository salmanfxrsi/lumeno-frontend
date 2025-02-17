import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../../components/Loading";

import { Swiper, SwiperSlide } from "swiper/react";
import { GoCodeReview } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Helmet } from "react-helmet-async";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const SessionDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [, role] = useRole();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: session = {}, isLoading } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/sessions/${id}`);
      return data;
    },
  });

  const { data: reviews = [], isFetching } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/reviews/${id}`);
      return data;
    },
  });

  const { _id: sessionId, ...restOfSession } = session;

  if ((isLoading, isFetching)) return <Loading></Loading>;

  const handleBookedSession = async () => {
    const bookedSessionData = {
      ...restOfSession,
      sessionId,
      studentEmail: user.email,
      studentPhoto: user.photoURL,
      studentName: user.displayName,
    };

    try {
      await axiosSecure.post("/booked-sessions", bookedSessionData);
      toast.success("Session Booked");
      navigate("/dashboard/student-booked-sessions");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleNavigateToPaymentPage = () => {
    navigate("/payment");
  };

  return (
    <div className="w-11/12 lg:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-36">
      <Helmet>
        <title>Details | Lumeno</title>
      </Helmet>
      {/* Session Details */}
      <div className="px-8 py-12 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-semibold">{session?.sessionTitle}</h2>
          {session.registrationFee === 0 && (
            <div className="bg-[#ABEF5F] font-bold px-3 rounded-2xl">Free</div>
          )}
          {session.registrationFee > 0 && (
            <div className="bg-[#ABEF5F] font-bold px-3 rounded-2xl">
              {session.registrationFee} $
            </div>
          )}
        </div>
        <p className="text-lg mb-3">{session?.sessionDescription}</p>
        <h2 className="text-2xl font-semibold">
          Tutor Name: {session?.tutorName}
        </h2>
        <p className="text-lg mt-4">
          <span className="font-bold">Registration Period:</span>{" "}
          {session.registrationStartDate} To {session?.registrationEndDate}
        </p>
        <p className="text-lg">
          <span className="font-bold">Class Start On:</span>{" "}
          {session?.classStartTime}
        </p>
        {/* Book Now Button */}
        {role === "student" && (
          <button
            onClick={
              session.registrationFee === 0
                ? handleBookedSession
                : handleNavigateToPaymentPage
            }
            disabled={new Date() > new Date(session?.registrationEndDate)}
            className={`flex items-center gap-1 ${
              new Date() > new Date(session?.registrationEndDate)
                ? "bg-red-500 text-white cursor-not-allowed"
                : "bg-[#ABEF5F] text-black hover:bg-gray-500 focus:outline-none"
            } font-black uppercase w-[144px] px-5 py-3 text-sm transition-colors duration-300 transform rounded-md lg:w-auto mt-8`}
          >
            <h1>
              {new Date() > new Date(session?.registrationEndDate)
                ? "Registration Closed"
                : "Book Now"}
            </h1>
          </button>
        )}
      </div>
      {/* Session Reviews */}
      <div className="px-4 bg-white rounded-md shadow-md min-h-[350px]">
        {reviews.length > 0 ? (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-32"
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="px-24">
                  <div className="flex items-center gap-1 font-bold mb-3 text-2xl">
                    <GoCodeReview className="text-" />
                    <h1>Reviews</h1>
                  </div>
                  <div className="p">
                    <h1 className="font-bold text-2xl">{review.studentName}</h1>
                    <p className="font-semibold">{review.studentEmail}</p>
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
        ) : (
          <h2 className="font-bold text-center mt-36 text-xl uppercase">
            No Review Posted Yet
          </h2>
        )}
      </div>
      {/* Session Details */}
    </div>
  );
};

export default SessionDetails;
