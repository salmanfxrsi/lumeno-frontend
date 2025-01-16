import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import { SiObsstudio } from "react-icons/si";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const UpdateSession = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { isLoading, data: session } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/sessions/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  const {
    _id,
    sessionTitle,
    sessionDuration,
    averageRating,
    registrationFee,
    sessionDescription,
    registrationStartDate,
    registrationEndDate,
    classStartTime,
    classEndTime,
    tutorName,
    tutorEmail,
  } = session;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const sessionTitle = form.sessionTitle.value;
    const sessionDuration = form.sessionDuration.value;
    const averageRating = Number(form.averageRating.value);
    const registrationFee = Number(form.registrationFee.value);
    const sessionDescription = form.sessionDescription.value;
    const registrationStartDate = form.registrationStartDate.value;
    const registrationEndDate = form.registrationEndDate.value;
    const classStartTime = form.classStartTime.value;
    const classEndTime = form.classEndTime.value;
    const sessionData = {
      sessionTitle,
      sessionDuration,
      averageRating,
      registrationFee,
      sessionDescription,
      registrationStartDate,
      registrationEndDate,
      classStartTime,
      classEndTime,
      tutorName,
      tutorEmail,
    };

    try {
      await axiosSecure.patch(`/sessions/${_id}`, sessionData);
      toast.success('Sessions Updated')
      navigate('/dashboard/admin-manage-sessions')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Update {session?.sessionTitle} | Lumeno</title>
      </Helmet>
      <Link
        to="/dashboard/admin-manage-sessions"
        className="flex items-center gap-2 font-bold mb-12 mt-14 text-xl"
      >
        <FaArrowAltCircleLeft />
        <h2 className="text-black uppercase">Go Back</h2>
      </Link>
      {/* Header */}
      <div className="flex items-center gap-24">
        <h1 className="text-xl font-black uppercase">
          Tutor Name: <span className="font-medium">{session?.tutorName}</span>
        </h1>
        <h1 className="text-xl font-black uppercase">
          Tutor Email:{" "}
          <span className="font-medium">{session?.tutorEmail}</span>
        </h1>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleSubmit}
        className="container grid grid-cols-4 gap-12 mt-12"
      >
        {/* Session Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Title
          </label>
          <input
            type="text"
            name="sessionTitle"
            defaultValue={sessionTitle}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Duration
          </label>
          <input
            type="text"
            name="sessionDuration"
            defaultValue={sessionDuration}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            name="averageRating"
            defaultValue={averageRating}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration Fee
          </label>
          <input
            type="number"
            name="registrationFee"
            defaultValue={registrationFee}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4 col-span-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Description
          </label>
          <textarea
            rows={5}
            type="text"
            name="sessionDescription"
            defaultValue={sessionDescription}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration Start On
          </label>
          <input
            type="date"
            name="registrationStartDate"
            defaultValue={registrationStartDate}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration End On
          </label>
          <input
            type="date"
            name="registrationEndDate"
            defaultValue={registrationEndDate}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Start On
          </label>
          <input
            type="date"
            name="classStartTime"
            defaultValue={classStartTime}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session End On
          </label>
          <input
            type="date"
            name="classEndTime"
            defaultValue={classEndTime}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button className="col-span-4 flex items-center w-full gap-3 bg-[#ABEF5F] font-black uppercase px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-sm hover:bg-gray-500 focus:outline-none mx-auto justify-center">
          <h1>Update Session Now</h1>
          <SiObsstudio className="text-xl animate-spin" />
        </button>
      </form>
    </div>
  );
};

export default UpdateSession;
