import { prisma } from '../prisma/prisma';
import { AuthorizationError } from './authorization';
import { Permission } from './permissions';

export interface CreateRoleInput {
  name: string;
  description?: string;
  permissions: Permission[];
  restaurantId: string;
  createdByUserId: string;
}

export interface UpdateRoleInput {
  name?: string;
  description?: string;
  permissions?: Permission[];
}

export class RoleService {
  static async createRole(input: CreateRoleInput) {
    // Vérifier que l'utilisateur a la permission de gérer les rôles
    const hasPermission = await this.checkManageRolesPermission(
      input.createdByUserId,
      input.restaurantId
    );

    if (!hasPermission) {
      throw new AuthorizationError('User does not have permission to manage roles');
    }

    // Vérifier que le nom du rôle n'existe pas déjà pour ce restaurant
    const existingRole = await prisma.role.findUnique({
      where: {
        restaurantId_name: {
          restaurantId: input.restaurantId,
          name: input.name,
        },
      },
    });

    if (existingRole) {
      throw new Error('Role name already exists for this restaurant');
    }

    return prisma.role.create({
      data: {
        id: crypto.randomUUID(),
        name: input.name,
        description: input.description,
        permissions: input.permissions,
        restaurantId: input.restaurantId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  static async updateRole(
    roleId: string,
    input: UpdateRoleInput,
    userId: string
  ) {
    const role = await prisma.role.findUnique({
      where: { id: roleId },
      include: { restaurant: true },
    });

    if (!role) {
      throw new Error('Role not found');
    }

    // Vérifier que l'utilisateur a la permission de gérer les rôles
    const hasPermission = await this.checkManageRolesPermission(
      userId,
      role.restaurantId
    );

    if (!hasPermission) {
      throw new AuthorizationError('User does not have permission to manage roles');
    }

    // Si le nom est modifié, vérifier qu'il n'existe pas déjà
    if (input.name && input.name !== role.name) {
      const existingRole = await prisma.role.findUnique({
        where: {
          restaurantId_name: {
            restaurantId: role.restaurantId,
            name: input.name,
          },
        },
      });

      if (existingRole) {
        throw new Error('Role name already exists for this restaurant');
      }
    }

    return prisma.role.update({
      where: { id: roleId },
      data: {
        ...input,
        updatedAt: new Date(),
      },
    });
  }

  static async deleteRole(roleId: string, userId: string) {
    const role = await prisma.role.findUnique({
      where: { id: roleId },
      include: { restaurant: true },
    });

    if (!role) {
      throw new Error('Role not found');
    }

    // Vérifier que l'utilisateur a la permission de gérer les rôles
    const hasPermission = await this.checkManageRolesPermission(
      userId,
      role.restaurantId
    );

    if (!hasPermission) {
      throw new AuthorizationError('User does not have permission to manage roles');
    }

    return prisma.role.delete({
      where: { id: roleId },
    });
  }

  static async getRestaurantRoles(restaurantId: string, userId: string) {
    // Vérifier que l'utilisateur a la permission de voir les rôles
    const hasPermission = await this.checkViewRolesPermission(
      userId,
      restaurantId
    );

    if (!hasPermission) {
      throw new AuthorizationError('User does not have permission to view roles');
    }

    return prisma.role.findMany({
      where: { restaurantId },
      include: {
        restaurantUsers: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  private static async checkManageRolesPermission(
    userId: string,
    restaurantId: string
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
      return false;
    }

    return restaurantUser.role.permissions.includes(Permission.MANAGE_USERS);
  }

  private static async checkViewRolesPermission(
    userId: string,
    restaurantId: string
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
      return false;
    }

    return restaurantUser.role.permissions.includes(Permission.VIEW_USERS);
  }
} 