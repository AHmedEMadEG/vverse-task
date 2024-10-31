interface props {
  icon: string;
}

const NavItem = ({ icon }: props) => {
  return (
    <div className="bg-custom-gradient rounded-full p-2 w-10 h-10 cursor-pointer">
      <img src={`/navbar-icons/${icon}.svg`} />
    </div>
  );
};

export default NavItem;
