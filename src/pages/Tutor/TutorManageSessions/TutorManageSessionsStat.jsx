import PropTypes from "prop-types";
import { FcApproval, FcCancel } from "react-icons/fc";
import { GiBookshelf } from "react-icons/gi";
import { MdPending } from "react-icons/md";

const TutorManageSessionsStat = ({ sessions, pending, approved, rejected }) => {
  return (
    <div className="stats w-full my-12">
      {/* Total Sessions */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <GiBookshelf />
        </div>
        <div className="font-bold uppercase">My Sessions</div>
        <div className="stat-value">{sessions}</div>
      </div>

      {/* Pending Sessions */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <MdPending />
        </div>
        <div className="font-bold uppercase">Pending Sessions</div>
        <div className="stat-value">{pending}</div>
      </div>

      {/* Approved Sessions */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <FcApproval />
        </div>
        <div className="font-bold uppercase">Approved Sessions</div>
        <div className="stat-value">{approved}</div>
      </div>

      {/* Rejected Sessions */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <FcCancel />
        </div>
        <div className="font-bold uppercase">Rejected Sessions</div>
        <div className="stat-value">{rejected}</div>
      </div>
    </div>
  );
};

TutorManageSessionsStat.propTypes = {
  sessions: PropTypes.number,
  pending: PropTypes.number,
  approved: PropTypes.number,
  rejected: PropTypes.number,
};

export default TutorManageSessionsStat;
