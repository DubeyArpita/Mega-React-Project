import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl container mx-auto p-4">
      {children}
    </div>
  );
}

export default Container;