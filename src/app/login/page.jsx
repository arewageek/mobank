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
    // await signIn("credentials");
    console.log("done");
  };

  return (
    <Container title="Login" icon={<FaDoorOpen />}>
      <form action={handleCredentialSignin}>
        <div class="bg-grey-200 flex flex-col">
          <div class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-5">
            <div class="bg-white px-6 py-8 rounded shadow-xl text-slate-900 w-full">
              <h1 class="mb-8 text-3xl text-center">Welcome!</h1>

              <input
                type="text"
                class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                class="block border-2 border-grey-400 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />

              <button
                type="submit"
                class="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-800 focus:outline-none my-1"
              >
                Sign In
              </button>

              <div className="w-full mt-5 flex flex-col space-y-3 md:space-y-0 md:space-x-3 space-x-0 md:flex-row justify-center items-center px-4">
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
            </div>

            <div class="text-grey-dark mt-6">
              New Here?{" "}
              <a
                class="no-underline border-b border-blue text-blue"
                href="/register"
              >
                Sign up
              </a>
              .
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
}
