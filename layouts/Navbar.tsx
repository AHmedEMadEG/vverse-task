import Avatar from "@/components/navbar/Avatar";
import BurgerMenu from "@/components/navbar/BurgerMenu";
import NavItem from "@/components/navbar/NavItem";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between py-1">
      <div>
        <img src="/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="flex items-center gap-4">
        <NavItem icon={"search"} />
        <NavItem icon={"add"} />
        <NavItem icon={"notification"} />
        <NavItem icon={"heart"} />
        <NavItem icon={"cart"} />
        <NavItem icon={"notification"} />
        <NavItem icon={"search"} />
        <NavItem icon={"add"} />
        <Avatar />
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
