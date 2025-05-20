import { PageHeader } from "@/app/components/layout/page-header";
import { getRequiredUser } from "@/lib/auth-session";
import { DataTableDemo } from "./table";

export default async function Articles() {
  const user = await getRequiredUser();
  const fullName = user.firstname + " " + user.lastname;
  return (
    <main className="w-full h-full flex flex-col">
      <PageHeader
        type="image"
        title={fullName}
        description="Quoi de neuf aujourd'hui ? 👋"
        image="https://avatar.iran.liara.run/public/1"
      />
      <section className="p-4 h-full">
        <div className="rounded-xl p-4 h-full border border-stroke-soft-200 bg-bg-white-0">
          <DataTableDemo />
        </div>
      </section>
    </main>
  );
}
