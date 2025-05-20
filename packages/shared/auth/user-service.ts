import { prisma } from "../prisma/prisma";

export class UserService {
  static async updateLastManagedOrganization(
    userId: string,
    organizationId: string,
  ) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        lastManagedOrganizationId: organizationId,
      },
    });
  }
}
