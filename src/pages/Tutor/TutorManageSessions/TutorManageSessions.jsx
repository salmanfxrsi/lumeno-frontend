import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import TutorManageSessionsStat from "./TutorManageSessionsStat";

const TutorManageSessions = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user?.email);

  const {
    isLoading,
    data: sessions = [],
    refetch,
  } = useQuery({
    queryKey: ["sessions", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/sessions?tutorEmail=${user?.email}`
      );
      return data;
    },
  });

  if ((loading, isLoading)) return <Loading></Loading>;

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
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Sessions | Lumeno Admin</title>
      </Helmet>
      <div className="flex justify-between">
        <TutorManageSessionsStat
          sessions={sessions.length}
          pending={
            sessions.filter((session) => session.status === "pending").length
          }
          approved={
            sessions.filter((session) => session.status === "approved").length
          }
          rejected={
            sessions.filter((session) => session.status === "rejected").length
          }
        ></TutorManageSessionsStat>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#ABEF5F]">
            <tr className="text-black font-semibold">
              <th></th>
              <th>Session Topic</th>
              <th>Registration Fee</th>
              <th>Session Status</th>
              <th>Request Again</th>
              <th>Session Details</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={session._id}>
                {/* Session Number */}
                <td className="font-bold">{index + 1}</td>

                {/* Session Title */}
                <td>
                  <h1 className="font-bold">{session?.sessionTitle}</h1>
                </td>

                {/* Registration Fee */}
                <td>
                  <h1 className="font-bold">{session?.registrationFee}</h1>
                </td>

                {/* Session Status */}
                <td>
                  <h1 className="font-bold">
                    {session?.status.charAt(0).toUpperCase() +
                      session?.status.slice(1)}
                  </h1>
                </td>

                {/* Request again if status rejected */}
                <th>
                  {session?.status === "rejected" ? (
                    <button
                      onClick={() =>
                        handleUpdateStatus(session?._id, "pending")
                      }
                      className=" bg-[#ABEF5F] text-black py-1 px-3 uppercase gap-1.5 font-black w-[170px] text-sm transition-colors duration-300 transform rounded-md hover:bg-gray-500 focus:outline-none mx-auto justify-center"
                    >
                      Request Again
                    </button>
                  ) : (
                    <h1 className="font-bold">
                      {session?.status.charAt(0).toUpperCase() +
                        session?.status.slice(1)}
                    </h1>
                  )}
                </th>

                {/* Session Details */}
                <th>
                  <Link
                    to={`/sessions/${session._id}`}
                    className="btn bg-[#ABEF5F] text-black text-xl"
                  >
                    <TbListDetails />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TutorManageSessions;
