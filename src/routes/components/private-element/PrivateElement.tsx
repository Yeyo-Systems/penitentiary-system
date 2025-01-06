import { useAppSelector } from '../../../store';
import { RoleEnum } from '../../../types';

interface PrivateElementProps {
  children: React.ReactNode;
  roles?: RoleEnum[];
}

export const PrivateElement = ({ children, roles }: PrivateElementProps) => {
  const { isUser, isAdmin } = useAppSelector((state) => state.auth);

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

  return isRoleValid ? children : null;
};
