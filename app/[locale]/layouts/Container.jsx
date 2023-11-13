import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:max-w-[1300px] mx-auto md:px-3 px-6 max-w-full">
      {children}
    </div>
  );
};

export default Container;
