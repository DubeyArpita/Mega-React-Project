import React from "react";
import logo from "../assets/logo.png";

function Logo({ width = "100px" }) {
  return (
    <img
      src={logo}
      alt="Write Up Logo"
      style={{ width, height: "auto" }}
      className="object-contain"
    />
  );
}

export default Logo;
