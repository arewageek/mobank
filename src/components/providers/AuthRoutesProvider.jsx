import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

function AuthRoutesProvider({ children }) {
  const session = auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthRoutesProvider;
