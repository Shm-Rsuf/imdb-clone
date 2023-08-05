import Link from "next/link";

const NavbarItem = ({ title, param }) => {
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`font-semibold hover:text-amber-600 cursor-pointer duration-300`}
      >
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavbarItem;
