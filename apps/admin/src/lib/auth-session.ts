import { auth } from "@feedy/shared";
import { prisma } from "@feedy/shared/prisma/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session?.user;
};

export const getRequiredUserWithoutOrganization = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  return user;
};

export const getRequiredUser = async () => {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }
  const userEntity = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      organizations: {
        include: {
          organization: true,
          role: true,
        },
      },
      lastManagedOrganization: true,
    },
  });
  if (!userEntity?.organizations.length) {
    redirect("/my-first-organization");
  }
  return userEntity;
};
