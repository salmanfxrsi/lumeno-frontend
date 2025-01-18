import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TutorCreateSession = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  if (loading) return <Loading></Loading>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const sessionTitle = form.sessionTitle.value;
    const sessionDuration = form.sessionDuration.value;
    const registrationFee = Number(form.registrationFee.value);
    const sessionDescription = form.sessionDescription.value;
    const registrationStartDate = form.registrationStartDate.value;
    const registrationEndDate = form.registrationEndDate.value;
    const classStartTime = form.classStartTime.value;
    const classEndTime = form.classEndTime.value;
    const sessionData = {
      sessionTitle,
      sessionDuration,
      registrationFee,
      sessionDescription,
      registrationStartDate,
      registrationEndDate,
      classStartTime,
      classEndTime,
      averageRating: 0,
      tutorName: user?.displayName,
      tutorEmail: user?.email,
      tutorImage: user?.photoURL,
      status: "pending",
    };

    try {
      await axiosSecure.post(`/sessions`, sessionData);
      toast.success("Session Created");
      event.target.reset();
      navigate("/dashboard/tutor-manage-sessions");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <Helmet>
        <title>Create Session | Lumeno Tutor</title>
      </Helmet>
      {/* Header */}
      <div className="flex items-center gap-24">
        <h1 className="text-xl font-semibold uppercase">
          Hello <span className="font-black">{user?.displayName}</span>, Request For A session Now
        </h1>
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleSubmit}
        className="container grid grid-cols-3 gap-12 mt-24"
      >
        {/* Tutor Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tutor Name
          </label>
          <input
            type="text"
            name="tutorName"
            value={user?.displayName}
            className="w-full px-3 py-2 border rounded-lg"
            readOnly
            required
          />
        </div>
        {/* Tutor Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tutor Email
          </label>
          <input
            type="email"
            name="tutorEmail"
            value={user?.email}
            className="w-full px-3 py-2 border rounded-lg"
            readOnly
            required
          />
        </div>
        {/* Session Duration */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Duration
          </label>
          <input
            type="text"
            name="sessionDuration"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Registration Fee */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration Fee
          </label>
          <input
            type="number"
            name="registrationFee"
            value={0}
            readOnly
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/*  Registration Start On */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration Start On
          </label>
          <input
            type="date"
            name="registrationStartDate"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Registration End On */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Registration End On
          </label>
          <input
            type="date"
            name="registrationEndDate"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Session Start On */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Start On
          </label>
          <input
            type="date"
            name="classStartTime"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Session End On */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session End On
          </label>
          <input
            type="date"
            name="classEndTime"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Session Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Title
          </label>
          <textarea
            type="text"
            rows={5}
            name="sessionTitle"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        {/* Session Description */}
        <div className="mb-4 col-span-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Session Description
          </label>
          <textarea
            rows={5}
            type="text"
            name="sessionDescription"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button className="col-span-4 flex items-center w-full gap-3 bg-[#ABEF5F] font-black uppercase px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-sm hover:bg-gray-500 focus:outline-none mx-auto justify-center">
          <h1>Create Session Now</h1>
        </button>
      </form>
    </div>
  );
};

export default TutorCreateSession;
