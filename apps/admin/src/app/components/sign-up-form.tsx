import { auth } from "@feedy/shared";

export const JoinUsForm = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: "name",
      },
    });
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
