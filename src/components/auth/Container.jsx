"use client";
// import { auth } from "@/auth";

export const Container = ({ title, icon, children }) => {
  //   const { data: session } = useSession();
  //   const router = useRouter();

  //   if (session) {
  //     router.replace("/user/dashboard");
  //   }

  return (
    <div className="w-screen h-screen flex justify-center items-center px-5 py-10 bg-white">
      <div className="w-full md:w-1/3 rounded-lg bg-white px-5 py-10">
        <div className="w-full flex justify-between items-center text-slate-700 font-bold px-5">
          <div className="w-full text-3xl font-bold text-center"></div>
        </div>
        {children}
      </div>
    </div>
  );
};
