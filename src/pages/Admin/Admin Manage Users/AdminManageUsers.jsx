import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import AdminManageUsersStat from "./AdminManageUsersStat";
import { Helmet } from "react-helmet-async";
import Loading from "../../../components/Loading";
import toast from "react-hot-toast";

const AdminManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    isLoading,
    data: users = [],
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  // handle role change
  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.patch(`/users-role/${id}`, { role: role });
      toast.success("Role Updated");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // change role confirmation
  const changeRoleConfirmation = (id, role) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleRoleChange(id, role);
          }}
        >
          Sure
        </button>
        <button
          className="bg-[#52C303] rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  //   delete specific single post by id
  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/users/${id}`);
      toast.success("Post Deleted");
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

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Manage Users | Lumeno Admin</title>
      </Helmet>
      <div className="flex justify-between">
        <AdminManageUsersStat
          users={users.length}
          students={users.filter((user) => user.role === "student").length}
          tutors={users.filter((user) => user.role === "tutor").length}
          admins={users.filter((user) => user.role === "admin").length}
        ></AdminManageUsersStat>
      </div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#ABEF5F]">
            <tr className="text-black font-semibold">
              <th></th>
              <th>User Photo</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Current Role</th>
              <th>Change Role</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td></td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.image} alt={user?.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="font-bold">{user?.name}</h1>
                </td>
                <td>
                  <h1 className="font-bold">{user?.email}</h1>
                </td>
                <td>
                  <h1 className="font-bold">
                    {user?.role
                      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                      : ""}
                  </h1>
                </td>
                {/* User Role Change Button */}
                <th>
                  {user.role === "admin" ? (
                    "Contact With Owner"
                  ) : (
                    <div className="mt-2">
                      <select
                        id="role"
                        name="role"
                        value={user?.role}
                        onChange={(e) =>
                          changeRoleConfirmation(user._id, e.target.value)
                        }
                        className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  )}
                </th>
                {/* Delete User Button */}
                <th>
                  {user.role === "admin" ? (
                    "Contact With Owner"
                  ) : (
                    <button
                      onClick={() => deleteConfirmation(user._id)}
                      className="btn bg-[#ABEF5F] text-black text-xl"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageUsers;
