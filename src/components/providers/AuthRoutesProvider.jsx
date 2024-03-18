import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

function AuthRoutesProvider({ children }) {
  const session = auth();

  // console.log("Sesssion 2:::", session);
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthRoutesProvider;
