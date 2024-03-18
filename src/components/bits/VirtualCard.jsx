import { auth } from "@/auth";
import React from "react";
import { FaBox, FaCcMastercard, FaVolumeUp } from "react-icons/fa";

export const VirtualCard = async () => {
  const session = await auth();

  console.log("Virtual Session", session);
  return (
    <div className="w-full h-full rounded-3xl bg-green-900/80 text-green-50 px-8 py-8">
      <div className="flex justify-between items-center text-2xl mb-10">
        <div>
          <FaBox />
        </div>

        <div>
          <FaVolumeUp />
        </div>
      </div>

      <div className="my-10">
        <span className="font-bold font-mono text-3xl">
          2984 5633 7859 4141
        </span>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="flex space-y-0 flex-col">
          <span className="text-[9pt] font-bold">Card Holder</span>
          <span className="text-3xl font-[450]"></span>
        </div>

        <div className="text-6xl">
          <FaCcMastercard />
        </div>
      </div>
    </div>
  );
};
