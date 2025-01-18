import { Helmet } from "react-helmet-async";
import SessionCard from "../../components/SessionCard";
import useSessions from "../../hooks/useSessions";
import { FaSearch } from "react-icons/fa";
import { RiResetRightFill } from "react-icons/ri";
import { useState } from "react";

const Sessions = () => {
  const [search, setSearch] = useState("");
  const [, sessions] = useSessions(search); // Skip the first value [isLoading]

  return (
    <div className="py-24 w-11/12 lg:container mx-auto">
      <Helmet>
        <title>Sessions | Lumeno</title>
      </Helmet>
      {/* Search Section */}
      <div className="mb-16 flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center border-2 w-[500px] rounded-lg p-1">
          <FaSearch className="text-gray-600 mx-3 text-xl" />
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
      {/* All Sessions Showcase */}
      {sessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions
            .filter((session) => session.status === "approved")
            .map((session) => (
              <SessionCard key={session._id} data={session}></SessionCard>
            ))}
        </div>
      ) : (
        <h1 className="text-2xl font-semibold mt-36 text-center uppercase">
          No Session Found
        </h1>
      )}
    </div>
  );
};

export default Sessions;
