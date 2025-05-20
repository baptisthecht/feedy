import { getUser } from "@/lib/auth-session";
import { redirect } from "next/navigation";
import { JoinUsForm } from "./form";
export default async function SignUpPage() {
  const user = await getUser();
  if (user) {
    redirect("/");
  }
  return <JoinUsForm />;
}
