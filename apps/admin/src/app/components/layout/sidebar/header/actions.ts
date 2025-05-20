"use server";

import { prisma } from "@feedy/shared/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function updateLastManagedOrganization(
  userId: string,
  organizationId: string,
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      lastManagedOrganizationId: organizationId,
    },
  });
  revalidatePath("/");
}
