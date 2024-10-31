const BurgerMenu = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button">
        <svg
          width="60"
          height="40"
          viewBox="0 0 60 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="ladderGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#1a1a1a" />
              <stop offset="20%" stop-color="#1a4c95" />
              <stop offset="50%" stop-color="#8b2f6b" />
              <stop offset="100%" stop-color="#ff5c5c" />
            </linearGradient>
          </defs>

          <rect
            x="30"
            y="20"
            width="30"
            height="6"
            rx="2"
            fill="url(#ladderGradient)"
          />
          <rect
            x="20"
            y="40"
            width="40"
            height="6"
            rx="2"
            fill="url(#ladderGradient)"
          />
          <rect
            x="10"
            y="60"
            width="50"
            height="6"
            rx="2"
            fill="url(#ladderGradient)"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="mt-4 dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
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
