import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props // inke alawa koi aur attribute pass karna ho to sab props ke andar aa jayenge
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
