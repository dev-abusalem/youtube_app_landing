import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ src, title, desc }) => {
  return (
    <div className="mb-5 md:mb-0 p-4 bg-white border border-slate-100 border-opacity-70 rounded-lg shadow duration-150 hover:shadow-sm">
      <div className="flex justify-center">
        <Image src={src} alt={title} width={100} className="rounded-t-lg" />
      </div>
      <div className="text-center p-5">
        <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h4>
        <p className="mb-3 text-gray-700">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
