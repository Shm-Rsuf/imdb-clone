"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  console.log("genre =", genre);

  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`font-semibold hover:text-amber-600 cursor-pointer duration-300 ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-[3px] decoration-amber-500 rounded-lg"
        }`}
      >
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavbarItem;
