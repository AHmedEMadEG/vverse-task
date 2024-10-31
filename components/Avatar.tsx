const Avatar = () => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-full w-10 h-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/profile-picture.jpeg')` }}
      ></div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <img src="/dropdown.png" width={10} height={10} />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a>Profile</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
