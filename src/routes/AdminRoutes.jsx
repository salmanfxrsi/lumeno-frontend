import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import useRole from "../hooks/useRole";

const AdminRoutes = ({ children }) => {
  const [isLoading, role] = useRole();

  if (isLoading) return <Loading></Loading>;

  if (role === "admin") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};

export default AdminRoutes;
