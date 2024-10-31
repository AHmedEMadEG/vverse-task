import Avatar from "@/components/Avatar";
import BurgerMenu from "@/components/BurgerMenu";
import NavItem from "@/components/NavItem";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between py-2">
      <div>
        <img src="/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="flex items-center gap-4">
        <NavItem icon={"search"} />
        <NavItem icon={"add"} />
        <NavItem icon={"notification"} />
        <NavItem icon={"search"} />
        <NavItem icon={"add"} />
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
