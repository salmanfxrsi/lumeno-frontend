import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TutorManageSessionsCard = ({ session, refetch }) => {
  const { sessionTitle, status, registrationFee } = session;
  const axiosSecure = useAxiosSecure();

  //   handle update status
  const handleUpdateStatus = async (id, status) => {
    try {
      await axiosSecure.patch(`/sessions/status/${id}?status=${status}`);
      toast.success("New Request Created");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {sessionTitle}
          <div
            className={`badge ${
              status === "rejected" ? "bg-red-500 text-white" : "bg-[#ABEF5F]"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </h2>
        <p>Registration Fee: {registrationFee}</p>
        <div className="card-actions mt-2 flex gap-4">
          {status === "rejected" && (
            <button
              onClick={() => handleUpdateStatus(session?._id, "pending")}
              className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-2 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Retry Request
            </button>
          )}
          <Link
            to={`/sessions/${session._id}`}
            className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-2 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            Session Details
          </Link>
        </div>
      </div>
    </div>
  );
};

TutorManageSessionsCard.propTypes = {
  session: PropTypes.object,
  refetch: PropTypes.func,
};

export default TutorManageSessionsCard;
