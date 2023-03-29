import { Navigate } from 'react-router-dom';
import { useUser } from 'redux/useSelectors';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
