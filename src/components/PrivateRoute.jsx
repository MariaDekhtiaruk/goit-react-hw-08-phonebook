import { Navigate } from 'react-router-dom';
import { useUser } from 'redux/useSelectors';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn, isLoading } = useUser();

  return isLoggedIn || isLoading ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
