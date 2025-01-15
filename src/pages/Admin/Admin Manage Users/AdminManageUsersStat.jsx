import PropTypes from "prop-types";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const AdminManageUsersStat = ({ users, students, tutors, admins }) => {
  return (
    <div className="stats w-full my-12">
      {/*  */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <FaUsersGear />
        </div>
        <div className="font-bold uppercase">Total Users</div>
        <div className="stat-value">{users}</div>
      </div>

      {/*  */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <PiStudentBold />
        </div>
        <div className="font-bold uppercase">Total Students</div>
        <div className="stat-value">{students}</div>
      </div>

      {/*  */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <FaChalkboardTeacher />
        </div>
        <div className="font-bold uppercase">Total Tutors</div>
        <div className="stat-value">{tutors}</div>
      </div>

      {/*  */}
      <div className="stat">
        <div className="stat-figure text-2xl">
          <MdAdminPanelSettings />
        </div>
        <div className="font-bold uppercase">Total Admins</div>
        <div className="stat-value">{admins}</div>
      </div>
    </div>
  );
};

AdminManageUsersStat.propTypes = {
  users: PropTypes.number,
  students: PropTypes.number,
  tutors: PropTypes.number,
  admins: PropTypes.number,
};

export default AdminManageUsersStat;
