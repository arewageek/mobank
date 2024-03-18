import { Container } from "@/components/auth/Container";
import {
  FaAt,
  FaDoorOpen,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaLock,
  FaRocket,
} from "react-icons/fa";

import { Button, Text } from "@/components/form/Input";
import { signIn } from "@/auth";

export default function Login() {
  const handleGoogleSignin = async (e) => {
    "use server";
    await signIn("google");
    window.location.href = "/users/dashboard";
  };

  const handleCredentialSignin = async (e) => {
    "use server";
    await signIn("credentials");
  };

  const handleFacebookSignin = async (e) => {
    "use server";
    await signIn("facebook");
  };

  return (
    <Container title="Login" icon={<FaDoorOpen />}>
      <form action={handleCredentialSignin}>
        <div className="w-full flex flex-col md:flex-row flex-wrap space-y-5 py-10 px-4">
          <Text placeholder={"name@email.com"} name="email" type="email" />
          <Text
            placeholder={"password"}
            name="passsword"
            type="password"
            psdIcon={{ shown: <FaEye />, hidden: <FaEyeSlash /> }}
          />
        </div>

        <div className="w-full mt-5 flex flex-col space-y-3 md:space-y-0 md:space-x-3 space-x-0 md:flex-row justify-center items-center px-4">
          <Button text={"Sign In"} type="button" icon={<FaRocket />} />

          <button
            onClick={handleGoogleSignin}
            className="min-w-[150pt] bg-green-800 hover:bg-green-200 border-green-800 border-2 hover:text-green-800 transition px-8 py-3 rounded-lg text-green-100 shadow-lg flex justify-center items-center space-x-3 font-[450]"
          >
            <div>
              <FaGoogle />
            </div>
            <div>Google</div>
          </button>
        </div>
      </form>
    </Container>
  );
}
