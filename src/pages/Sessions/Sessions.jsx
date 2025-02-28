import { Helmet } from "react-helmet-async";
import SessionCard from "../../components/SessionCard";
import useSessions from "../../hooks/useSessions";
import { FaSearch } from "react-icons/fa";
import { RiArrowUpDownFill, RiResetRightFill } from "react-icons/ri";
import { useState } from "react";

const Sessions = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const [, sessions] = useSessions(search); // Skip the first value [isLoading]

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="py-24 w-10/12 lg:container mx-auto">
      <Helmet>
        <title>Sessions | Lumeno</title>
      </Helmet>
      {/* Search Section */}
      <div className="mb-16 lg:flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center border-2 lg:w-[500px] rounded-lg p-1">
          <FaSearch className="text-gray-600 mx-3 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2 outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-6 justify-center mt-6">
          {/* Sort Button */}
          <button
            onClick={toggleSortOrder}
            className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase px-8 py-5 text-sm text-black transition-colors duration-300 transform rounded-md w-auto hover:bg-gray-500 focus:outline-none"
          >
            <h1>Sort: {sortOrder === "asc" ? "⬆️" : "⬇️"}</h1>
            <RiArrowUpDownFill className="text-xl" />
          </button>

          {/* Reset Button */}
          <button
            onClick={() => setSearch("")}
            className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase px-8 py-5 text-sm text-black transition-colors duration-300 transform rounded-md w-auto hover:bg-gray-500 focus:outline-none"
          >
            <h1>Reset</h1>
            <RiResetRightFill className="text-xl" />
          </button>
        </div>
      </div>
      {/* All Sessions Showcase */}
      {sessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sessions
            .filter((session) => session.status === "approved")
            .sort((a, b) =>
              sortOrder === "asc"
                ? a.registrationFee - b.registrationFee
                : b.registrationFee - a.registrationFee
            )
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
