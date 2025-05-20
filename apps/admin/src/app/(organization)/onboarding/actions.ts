"use server";

import { getRequiredUser } from "@/lib/auth-session";
import { prisma } from "@feedy/shared/prisma/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const updateOrganizationSchema = z.object({
  address: z.string().optional(),
});

export async function updateOrganization(formData: FormData) {
  try {
    const user = await getRequiredUser();
    const { address } = updateOrganizationSchema.parse({
      address: formData.get("address"),
    });

    await prisma.organization.update({
      where: {
        id: user.organizations[0].organization.id,
      },
      data: {
        address,
        updatedAt: new Date(),
      },
    });

    revalidatePath("/");
    redirect("/dashboard");
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.errors[0].message);
    }
    throw new Error("Une erreur est survenue");
  }
}
