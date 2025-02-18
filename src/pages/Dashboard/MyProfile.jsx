import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const MyProfile = () => {
  const { user } = useAuth();
  const [loading, role] = useRole();
  if (loading) return <Loading></Loading>;

  return (
    <div className="w-11/12 lg:w-8/12 mx-auto py-24">
      <div className="w-full p-8 shadow-xl flex gap-8 rounded-xl">
        {/* Image */}
        <div>
          <img className="w-24 h-24 rounded-lg" src={user?.photoURL} alt="" />
        </div>
        {/* Tutor Details */}
        <div>
          <h2 className="card-title">
            {user?.displayName}
            <div className="badge bg-[#ABEF5F]">{role}</div>
          </h2>
          <p className="font-bold mt-1">
            Email: <span className="font-medium">{user?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
