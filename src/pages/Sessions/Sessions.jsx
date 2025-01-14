import { Helmet } from "react-helmet-async";
import SessionCard from "../../components/SessionCard";
import useSessions from "../../hooks/useSessions";
import { FaSearch } from "react-icons/fa";
import { RiResetRightFill } from "react-icons/ri";
import { useState } from "react";

const Sessions = () => {
  const [search, setSearch] = useState("");
  const [sessions] = useSessions(search);

  return (
    <div className="py-24 w-11/12 lg:container mx-auto">
      <Helmet>
        <title>Sessions | Lumeno</title>
      </Helmet>
      {/* Search Section */}
      <div className="mb-16 flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center border-4 border-black w-[500px] rounded-lg p-1">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <SessionCard key={session._id} data={session}></SessionCard>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
