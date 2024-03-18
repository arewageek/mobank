"use client";

import { useState } from "react";

export const Text = ({
  placeholder,
  type,
  classes = "",
  icon,
  name,
  psdIcon = {},
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex bg-slate-100 rounded-lg border-1 border-slate-300 text-slate-600 shadow-md">
      {icon && (
        <label
          className="px-5 py-3 text-lg flex justify-center items-center bg-slate-800 text-slate-100 rounded-l-xl"
          htmlFor={`${name}`}
        >
          {icon}
        </label>
      )}
      <input
        type={showPassword ? "text" : type}
        name={name}
        id={name}
        className={`w-full bg-transparent ${!psdIcon && "rounded-r-lg"} ${
          !icon && "rounded-l-lg"
        } px-5 py-3 text-lg placeholder:gray-400 ${classes}`}
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="px-5 py-3 text-lg flex justify-center items-center bg-slate-200/80 rounded-r-lg"
        >
          {showPassword ? psdIcon.shown : psdIcon.hidden}
        </button>
      )}
    </div>
  );
};

export const Button = ({ type, icon, text, onclick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const clickEvent = () => {
    setIsLoading((prev) => !prev);
    onclick;
  };

  return (
    <div className="w-full px-5">
      <button
        type={type}
        onClick={clickEvent}
        className="group px-10 py-3.5 rounded-lg bg-slate-800 text-slate-50 text-sm font-bold hover:bg-slate-50 hover:text-slate-800 border-2 border-slate-800 flex justify-center items-center space-x-5 transition duration-300"
      >
        <div>{text}</div>

        {isLoading ? (
          <div className="animate-spin h-4 w-4 border-2 border-t-0 border-l-0 rounded-full group-hover:border-slate-800 border-slate-100"></div>
        ) : (
          <div>{icon}</div>
        )}
      </button>
    </div>
  );
};
