import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading";
import StudentManageNotesCard from "./StudentManageNotesCard";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { RiResetRightFill } from "react-icons/ri";

const StudentManageNotes = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes", user?.email, search],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/notes?studentEmail=${user?.email}&&search=${search}`
      );
      return data;
    },
  });

  if (loading) return <Loading></Loading>;

  return (
    <div className="w-11/12 3xl:container mx-auto">
      <Helmet>
        <title>Manage Notes | Lumeno Admin</title>
      </Helmet>
      {/* Manage Notes Header  */}
      <div className="flex justify-between">
        <div className="stats w-full my-12 flex flex-col-reverse 2xl:flex-row">
          <div>
            {/* Search Section */}
            <div className="mb-16 flex justify-between items-center mt-12 mr-8">
              {/* Search Bar */}
              <div className="flex items-center border-2 w-[500px] rounded-lg p-1">
                <FaSearch className="text-black mx-3" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 outline-none text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              {/* Reset Button */}
              <button
                onClick={() => setSearch("")}
                className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-8 py-5 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none ml-16"
              >
                <h1>Reset</h1>
                <RiResetRightFill className="text-xl" />
              </button>
            </div>
          </div>

          {/* Note Stat */}
          <div className="stat">
            <div className="stat-figure text-2xl">
              <GiNotebook />
            </div>
            <div className="font-bold uppercase">Notes Here</div>
            <div className="stat-value">{notes.length}</div>
          </div>
        </div>
      </div>
      {/* All Notes Showcase */}
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 mb-24">
        {notes.map((note) => (
          <StudentManageNotesCard
            key={note._id}
            note={note}
            refetch={refetch}
          ></StudentManageNotesCard>
        ))}
      </div>
    </div>
  );
};

export default StudentManageNotes;
