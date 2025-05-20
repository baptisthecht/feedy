import { getRequiredUser } from "@/lib/auth-session";
import { SideBar } from "../components/layout/sidebar/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getRequiredUser();
  console.log(user);
  return (
    <div className="h-dvh w-dvw flex">
      <SideBar />
      {children}
    </div>
  );
}
