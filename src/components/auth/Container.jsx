import React from "react";
import { useSession } from "next-auth/react";

export const Container = ({ title, icon, children }) => {
  const { data: session } = useSession();

  return (
    <div className="w-screen h-screen flex justify-center items-center px-5 py-10 bg-gray-100">
      <div className="w-full md:w-1/3 rounded-lg shadow-2xl bg-gray-50 px-5 py-10">
        <div className="w-full flex justify-between items-center text-slate-700 font-bold px-5">
          <div className="text-2xl">{icon}</div>

          <div>{title}</div>
        </div>
        {children}
      </div>
    </div>
  );
};
