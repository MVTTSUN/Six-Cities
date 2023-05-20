import { Navigate } from 'react-router-dom';
import { AuthStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: string;
}

export default function PrivateRoute({children, authStatus} : PrivateRouteProps) : JSX.Element {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to='/login' />
  );
}
