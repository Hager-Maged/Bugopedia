import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogged = localStorage.getItem("isLogged") === "true";

  if (!isLogged) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
