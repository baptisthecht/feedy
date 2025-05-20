import { auth } from "@feedy/shared";

export const JoinUsForm = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;

    await auth.api.signUpEmail({
      body: {
        email,
        password,
        firstname,
        lastname,
        name: `${firstname} ${lastname}`,
      },
    });
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="text" name="firstname" placeholder="Firstname" />
        <input type="text" name="lastname" placeholder="Lastname" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
