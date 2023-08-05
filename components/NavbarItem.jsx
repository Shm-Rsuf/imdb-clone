"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div>
      <Link
        href={`/?search=${param}`}
        className={`font-semibold hover:text-amber-600 cursor-pointer duration-300 ${
          search &&
          search === param &&
          "underline underline-offset-8 decoration-[3px] decoration-amber-500 rounded-lg"
        }`}
      >
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavbarItem;
