/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SessionCard = ({ data }) => {
  const [isRegistrationClose, setRegistrationClose] = useState(false);
  const { _id, sessionTitle, sessionDescription, registrationEndDate } = data;

  useEffect(() => {
    setRegistrationClose(new Date() > new Date(registrationEndDate));
  }, []);

  return (
    <Link
      to={`/sessions/${_id}`}
      className="shadow-2xl rounded-2xl hover:p-2 duration-300 hover:bg-slate-200"
    >
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h2 className="card-title">{sessionTitle}</h2>
          <div
            className={`${
              isRegistrationClose
                ? "bg-red-500 text-white"
                : "bg-[#ABEF5F] text-black"
            } font-semibold uppercase px-3 rounded-2xl`}
          >
            {isRegistrationClose ? "Closed" : "Ongoing"}
          </div>
        </div>
        <p>{sessionDescription}</p>
        <div className="card-actions mt-2">
          <button
            to="/sessions/1"
            className="flex items-center gap-1 bg-[#ABEF5F] font-black uppercase w-[144px] px-5 py-3 text-sm text-black transition-colors duration-300 transform rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
          >
            <h1>Read More...</h1>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SessionCard;
