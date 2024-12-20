import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center dark:bg-gray-600 bg-amber-100 py-4 gap-5">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
