import { useRef } from "react";
import { Menu } from "primereact/menu";
import { Link } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { signOut } from "../../reducers/auth";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const menu = useRef(null);

  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.username);

  const items = [
    {
      label: "Profile",
      items: [
        {
          label: username,
          icon: "pi pi-user",
          disabled: true,
        },
      ],
    },
    {
      label: "Options",
      items: [
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => {},
        },
        {
          label: "Log out",
          icon: "pi pi-upload",
          className: "bg-red-100 mb-2",
          command: () => dispatch(signOut()),
        },
      ],
    },
  ];

  return (
    <div
      className="flex justify-between items-center p-4 bg-slate-100"
      id="navbar"
    >
      <div className="flex">
        <Link to="/" className="mr-8 font-semibold">
          FinanceFluent 💵
        </Link>
        <Link className="mx-2 text-sky-600 hover:text-sky-900" to="/about">
          About
        </Link>
        <Link className="mx-2 text-sky-600 hover:text-sky-900" to="/pricing">
          Pricing
        </Link>
        <Link className="mx-2 text-sky-600 hover:text-sky-900" to="/contacts">
          Contacts
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="mx-2 text-sky-600 hover:text-sky-900"
              to="/app/dashboard"
            >
              Dashboard
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex">
        {isLoggedIn ? (
          <>
            <div className="flex justify-center flex-col items-center">
              <Avatar
                icon="pi pi-user"
                className="cursor-pointer shadow border border-zinc-300"
                shape="circle"
                label={username.charAt(0)}
                onClick={(e) => menu.current.toggle(e)}
              />
              <Menu model={items} popup ref={menu} className="page-fonts" />
            </div>
          </>
        ) : (
          <>
            <Link
              to="/app/signin"
              className="mr-4 text-zinc-600 hover:text-zinc-900 underline"
            >
              Sign in
            </Link>
            <Link
              to="/app/signup"
              className="mr-4 text-emerald-600 hover:text-emerald-900 underline"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
