import {
  auth,
  FancyButtonRoot,
  Input,
  InputIcon,
  InputRoot,
  InputWrapper,
  LabelAsterisk,
  LabelRoot,
  LabelSub,
} from "@feedy/shared";
import { RiLockLine, RiMailLine } from "@remixicon/react";

export const SignInForm = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  };

  return (
    <div className="bg-bg-soft-200 h-dvh w-dvw flex items-center justify-center">
      <form
        action={handleSubmit}
        className="bg-bg-white-0 p-10 rounded-20 flex flex-col gap-6 items-center min-w-md"
      >
        <div className="text-center">
          <h1 className="text-title-h6 text-gray-900">Welcome back</h1>
          <p className="text-paragraph-sm text-gray-600">
            Please enter your details to login
          </p>
        </div>
        <hr className="w-full border-stroke-soft-200" />
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-1">
            <LabelRoot htmlFor="email">
              Email Address
              <LabelAsterisk />
              <LabelSub>(Optional)</LabelSub>
            </LabelRoot>

            <InputRoot>
              <InputWrapper>
                <InputIcon as={RiMailLine} />
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="hello@alignui.com"
                />
              </InputWrapper>
            </InputRoot>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-1">
            <LabelRoot htmlFor="password">
              Password
              <LabelAsterisk />
            </LabelRoot>

            <InputRoot>
              <InputWrapper>
                <InputIcon as={RiLockLine} />
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="********"
                />
              </InputWrapper>
            </InputRoot>
          </div>
        </div>
        <FancyButtonRoot variant="neutral" size="medium" className="w-full">
          Sign In
        </FancyButtonRoot>
      </form>
    </div>
  );
};
