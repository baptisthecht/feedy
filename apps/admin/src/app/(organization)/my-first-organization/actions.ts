"use server";

import { getRequiredUserWithoutOrganization } from "@/lib/auth-session";
import { prisma } from "@feedy/shared/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createOrganizationSchema = z.object({
  name: z.string().min(1, "Le nom de l'établissement est requis"),
});

export async function createOrganization(formData: FormData) {
  const user = await getRequiredUserWithoutOrganization();
  const { name } = createOrganizationSchema.parse({
    name: formData.get("name"),
  });

  const organizationId = crypto.randomUUID();
  const ownerRoleId = crypto.randomUUID();

  await prisma.organization.create({
    data: {
      id: organizationId,
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
      roles: {
        create: {
          id: ownerRoleId,
          name: "owner",
          description: "Propriétaire de l'établissement",
          permissions: ["*"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
      users: {
        create: {
          id: crypto.randomUUID(),
          userId: user.id,
          roleId: ownerRoleId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    },
  });

  revalidatePath("/");
  redirect("/onboarding");
}
