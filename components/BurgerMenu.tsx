const BurgerMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <img src="/burger-menu.svg" width={40} height={40} className="ms-6" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
