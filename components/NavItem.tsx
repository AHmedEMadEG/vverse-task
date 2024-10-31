interface props {
    icon: string
}

const NavItem = ({icon}: props) => {
  return <div className="bg-black rounded-full p-2 w-10 h-10 cursor-pointer"><img src={`/${icon}.svg`} /></div>;
};

export default NavItem;