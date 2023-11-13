import Link from "next/link";
import React from "react";

const CustomButton = ({ title, href }) => {
  return (
    <div>
      <Link
        href={href}
        className="text-white px-4 py-2.5 rounded-md shadow-xl bg-gradient-to-r from-blue-800 duration-150 to-sky-600 hover:bg-gradient-to-l"
      >
        {title}
      </Link>
    </div>
  );
};

export default CustomButton;
