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

  const handleGoogleSignin = async (e) => {
    "use server";
    await signIn("google");
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
        {/* 
        <div className="px-4">
          {authLinks.map((link, index) => (
            <div key={index} className="mb-2 text-sm">
              {link?.label}{" "}
              <a
                href={link.path}
                className="text-slate-700 underline italic hover:text-indigo-600 font-[450] transition"
              >
                {link.prompt}
              </a>
            </div>
          ))}
        </div> */}

        <div className="w-full mt-5">
          <Button text={"Sign In"} type="button" icon={<FaRocket />} />
        </div>
        <div className="w-full flex mx-4 items-center mt-7 space-x-5">
          <button
            onClick={handleGoogleSignin}
            className="bg-slate-800 hover:bg-slate-200 border-slate-800 border-2 hover:text-slate-800 transition px-8 py-3 rounded-xl text-slate-100 shadow-lg flex justify-center items-center space-x-3 font-[450]"
          >
            <div>
              <FaGoogle />
            </div>
            <div>Google</div>
          </button>

          <button
            onClick={handleFacebookSignin}
            className="bg-slate-800 hover:bg-slate-200 border-slate-800 border-2 hover:text-slate-800 transition px-8 py-3 rounded-xl text-slate-100 shadow-lg flex justify-center items-center space-x-3 font-[450]"
          >
            <div>
              <FaFacebookF />
            </div>
            <div>Facebook</div>
          </button>
        </div>
      </form>
    </Container>
  );
}
