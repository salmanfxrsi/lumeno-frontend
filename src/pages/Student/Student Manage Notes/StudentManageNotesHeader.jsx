import PropTypes from "prop-types";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { RiResetRightFill } from "react-icons/ri";

const StudentManageNotesHeader = ({ notes }) => {
  const [search, setSearch] = useState("");

  return (
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

      {/*  */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <GiNotebook />
        </div>
        <div className="font-bold uppercase">Total Notes</div>
        <div className="stat-value">{notes}</div>
      </div>
    </div>
  );
};

StudentManageNotesHeader.propTypes = {
  notes: PropTypes.number,
};

export default StudentManageNotesHeader;
