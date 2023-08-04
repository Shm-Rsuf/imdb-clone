import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div className=" flex justify-center items-center">
      <Link href={address} className="hover:text-amber-600">
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
