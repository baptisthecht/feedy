import { prisma } from '../prisma/prisma';
import { Permission, RolePermissions } from './permissions';

export class AuthorizationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export async function checkPermission(
  userId: string,
  restaurantId: string,
  requiredPermission: Permission
): Promise<boolean> {
  const restaurantUser = await prisma.restaurantUser.findUnique({
    where: {
      restaurantId_userId: {
        restaurantId,
        userId,
      },
    },
    include: {
      role: true,
    },
  });

  if (!restaurantUser) {
    throw new AuthorizationError('User is not associated with this restaurant');
  }

  const rolePermissions = RolePermissions[restaurantUser.role.name];
  if (!rolePermissions) {
    throw new AuthorizationError('Invalid role');
  }

  return rolePermissions.includes(requiredPermission);
}

export async function requirePermission(
  userId: string,
  restaurantId: string,
  requiredPermission: Permission
): Promise<void> {
  const hasPermission = await checkPermission(userId, restaurantId, requiredPermission);
  if (!hasPermission) {
    throw new AuthorizationError('User does not have the required permission');
  }
} 