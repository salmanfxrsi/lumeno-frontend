import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminManageUsersStat from "../../Admin/Admin Manage Users/AdminManageUsersStat";
import Loading from "../../../components/Loading";
import SubscribeUs from "../../Home/SubscribeUs/SubscribeUs";

const OverallStat = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="w-10/12 mx-auto">
      <AdminManageUsersStat
        users={users.length}
        students={users.filter((user) => user.role === "student").length}
        tutors={users.filter((user) => user.role === "tutor").length}
        admins={users.filter((user) => user.role === "admin").length}
      ></AdminManageUsersStat>
      {/* Chart */}
      <div className="mt-12">
        <SubscribeUs></SubscribeUs>
      </div>
    </div>
  );
};

export default OverallStat;
