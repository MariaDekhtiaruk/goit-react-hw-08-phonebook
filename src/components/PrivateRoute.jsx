import { Navigate } from 'react-router-dom';
import { useUser } from 'redux/useSelectors';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useUser();

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
