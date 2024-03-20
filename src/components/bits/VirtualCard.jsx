import { auth } from "@/auth";
import React from "react";
import { FaBox, FaCcMastercard, FaVolumeUp } from "react-icons/fa";

export const VirtualCard = async () => {
  const session = await auth();

  console.log("Virtual Session", session);
  return (
    // <div className="w-full h-full rounded-3xl bg-green-900/80 text-green-50 px-8 py-8">
    //   <div className="flex justify-between items-center text-2xl mb-10">
    //     <div>
    //       <FaBox />
    //     </div>

    //     <div>
    //       <FaVolumeUp />
    //     </div>
    //   </div>

    //   <div className="my-10">
    //     <span className="font-bold font-mono text-3xl">
    //       2984 5633 7859 4141
    //     </span>
    //   </div>

    //   <div className="w-full flex items-center justify-between">
    //     <div className="flex space-y-0 flex-col">
    //       <span className="text-[9pt] font-bold">Card Holder</span>
    //       <span className="text-3xl font-[450]"></span>
    //     </div>

    //     <div className="text-6xl">
    //       <FaCcMastercard />
    //     </div>
    //   </div>
    // </div>

    <div class="w-[200pt] lg:w-[260pt] h-[190px] lg:h-[250px] m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">
      <img
        class="relative object-cover w-full h-full rounded-xl "
        src="https://i.imgur.com/kGkSg1v.png"
      />

      <div class="w-full lg:px-8 px-4 absolute top-6 flex flex-col space-y-0 lg:space-y-4">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light text-sm lg:text-lg">Name</p>
            <p class="font-medium tracking-widest text-sm lg:text-lg">
              Karthik P
            </p>
          </div>
          <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
        </div>
        <div class="pt-0">
          <p class="font-light text-sm lg:text-lg">Card Number</p>
          <p class="font-medium tracking-more-wider text-sm lg:text-lg">
            4642 3489 9867 7632
          </p>
        </div>
        <div class="pt-4 pr-6">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light text-xs">Valid</p>
              <p class="font-medium tracking-wider text-[10pt] lg:text-sm">
                11/15
              </p>
            </div>
            <div class="">
              <p class="font-light text-xs">Expiry</p>
              <p class="font-medium tracking-wider text-[10pt] lg:text-sm">
                03/25
              </p>
            </div>

            <div class="">
              <p class="font-light text-xs">CVV</p>
              <p class="font-bold tracking-more-wider text-[10pt] lg:text-sm">
                ···
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
