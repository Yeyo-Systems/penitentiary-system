import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../../../store';
import { RoleEnum } from '../../../types';

interface PrivateRouteProps {
  roles?: RoleEnum[];
}

export const PrivateRoute = ({ roles }: PrivateRouteProps) => {
  const { isLoggedIn, isUser, isAdmin } = useAppSelector((state) => state.auth);

  const checkRole = (role: RoleEnum) => {
    if (role === RoleEnum.ADMIN) {
      return isAdmin;
    }

    if (role === RoleEnum.USER) {
      return isUser;
    }

    return false;
  };

  const isRoleValid = roles ? roles.some((roles) => checkRole(roles)) : true;

  if (!isLoggedIn || !isRoleValid) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
