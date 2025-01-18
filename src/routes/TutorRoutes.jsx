import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";

const TutorRoutes = ({ children }) => {
  const [isLoading, role] = useRole();

  if (isLoading) return <Loading></Loading>;

  if (role === "tutor") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

TutorRoutes.propTypes = {
  children: PropTypes.node,
};

export default TutorRoutes;
