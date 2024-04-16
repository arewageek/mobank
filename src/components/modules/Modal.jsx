import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const Modal = ({ title, message }) => {
  return (
    <div className="w-screen h-screen backdrop-blur-sm fixed top-0 left-0 p-10 flex justify-center items-center">
      <div className="px-10 py-5 w-full lg:w-1/3 rounded-lg shadow bg-white">
        <div className="w-full flex justify-between items-center">
          <div>{title}</div>
          <div>
            <FaTimesCircle />
          </div>
        </div>

        <div className="py-4 flex justify-center items-center">
          <div className="text-center">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
