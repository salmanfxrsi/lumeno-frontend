import Loading from "../../../components/Loading";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { RiDeleteBin5Line } from "react-icons/ri";
import useSessions from "../../../hooks/useSessions";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminManageSessionsStat from "./AdminManageSessionsStat";
import AdminRejectSessionReasonModal from "./AdminRejectSessionReasonModal";
import { useState } from "react";

const AdminManageSessions = () => {
  const [isLoading, sessions, refetch] = useSessions();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <Loading></Loading>;

  // delete specific single session by id
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/sessions/${id}`);
      toast.success("Session Deleted");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteConfirmation = (id) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleDelete(id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-[#52C303] rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Dismiss
        </button>
      </div>
    ));
  };

  //   handle update status
  const handleUpdateStatus = async (id, status) => {
    await axiosSecure.patch(`/sessions/status/${id}?status=${status}`);
    refetch();
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Sessions | Lumeno Admin</title>
      </Helmet>
      <div className="flex justify-between">
        <AdminManageSessionsStat
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
        ></AdminManageSessionsStat>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#ABEF5F]">
            <tr className="text-black font-semibold">
              <th></th>
              <th>Session Topic</th>
              <th>Tutor Name</th>
              <th>Update Session Status</th>
              <th>Session Details</th>
              <th>Update Session</th>
              <th>Delete Session</th>
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

                {/* Tutor Name */}
                <td>
                  <h1 className="font-bold">{session?.tutorName}</h1>
                </td>

                {/* Manage Status */}
                <td>
                  {/* If status is pending */}
                  {session?.status === "pending" ? (
                    <div className="flex items-center gap-4 text-3xl">
                      <button
                        onClick={() =>
                          handleUpdateStatus(session._id, "approved")
                        }
                        className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-2 py-1 text-sm transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-1 bg-[#EF4444] font-black uppercase w-[144px] px-2 py-1 text-sm text-white transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none"
                      >
                        Cancel
                        {/* Appear Send Rejection Reason Modal If Rejected */}
                        <AdminRejectSessionReasonModal
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                          id={session?._id}
                          refetch={refetch}
                          handleUpdateStatus={handleUpdateStatus}
                        />
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`${
                        session?.status === "rejected"
                          ? "bg-[#EF4444] text-white"
                          : "bg-[#ABEF5F]"
                      } flex items-center gap-1 w-[100px] font-black uppercase px-2 py-1 text-xs  transition-colors duration-300 transform rounded-badge justify-center`}
                    >
                      {session?.status.charAt(0).toUpperCase() +
                        session?.status.slice(1)}
                    </div>
                  )}
                </td>

                {/* Session Details */}
                <th>
                  <Link
                    to={`/sessions/${session._id}`}
                    className="btn bg-[#ABEF5F] text-black text-xl"
                  >
                    <TbListDetails />
                  </Link>
                </th>
                {/* Update Session */}
                <th>
                  <Link
                    to={`/dashboard/admin-update-session/${session._id}`}
                    className="btn bg-[#ABEF5F] text-black text-xl"
                  >
                    <GrDocumentUpdate />
                  </Link>
                </th>
                {/* Delete Session */}
                <th>
                  <button
                    onClick={() => deleteConfirmation(session._id)}
                    className="btn bg-red-500 text-white text-xl"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageSessions;
