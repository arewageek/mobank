// "use client";

// import { fsUserExist } from "@/lib/firestore";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export const ProtectedRoutesProvider = ({ children }) => {
//   const { data: session } = useSession();
//   //   const router = useRouter();

//   console.log("Session 1 ::: ", session);

//   //   fsUserExist("arewageek@gmail.com");

//   if (!session) {
//     // router.replace("/login");
//     // return false;
//   }

//   //   check if user profile exist

//   return children;
// };
