import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";

const StudentRoutes = ({ children }) => {
  const [isLoading, role] = useRole();

  if (isLoading) return <Loading></Loading>;

  if (role === "student") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

StudentRoutes.propTypes = {
  children: PropTypes.node,
};

export default StudentRoutes;
