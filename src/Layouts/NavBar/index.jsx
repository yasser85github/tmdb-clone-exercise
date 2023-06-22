import NavBarList from "./NavBarList";
import { navItemsLeft, navItemsRight } from "./navItems";

export default function NavBar() {
  return (
    <nav className="h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1300px] mx-auto px-10">
      <NavBarList items={navItemsLeft} />
      <NavBarList items={navItemsRight} />
    </nav>
  );
}
