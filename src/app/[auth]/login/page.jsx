import { Container } from "@/components/auth/Container";
import {
  FaAt,
  FaDoorOpen,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaRocket,
} from "react-icons/fa";

import { Button, Text } from "@/components/form/Input";
import { signIn } from "@/auth";

export default function Login() {
  const authLinks = [
    {
      label: "New here? ",
      prompt: "let's sign you up!",
      path: "/auth/register",
    },
    {
      prompt: "lost my password",
      path: "/auth/recover",
    },
  ];

  const handleGoogleLogin = async (e) => {
    "use server";
    await signIn("google");
  };

  return (
    <Container title="Login" icon={<FaDoorOpen />}>
      <form action={handleGoogleLogin}>
        <div className="w-full flex justify-center items-center mt-10">
          <button className="bg-slate-800 px-5 py-3 rounded-xl text-xs text-slate-100">
            Login With Google
          </button>
        </div>
      </form>
    </Container>
  );
}
