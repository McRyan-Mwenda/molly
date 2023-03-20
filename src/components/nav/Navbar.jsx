import { Menu } from "primereact/menu";
import { useRef, useState } from "react";
import { Avatar } from "primereact/avatar";
import { signOut } from "../../reducers/auth";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditProfile from "../dialogs/EditProfile";

const Navbar = () => {
  const menu = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

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
          label: "View profile",
          icon: "pi pi-info-circle",
          command: () => navigate("/app/dashboard/profile"),
        },
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => setIsVisible(true),
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
            <div className="flex justify-center items-center">
              <p className="mr-4 text-zinc-500">{username}</p>
              <Avatar
                icon="pi pi-user"
                className="shadow border border-zinc-300 cursor-pointer"
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

      {/* update user */}
      <EditProfile isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* update user */}
    </div>
  );
};

export default Navbar;
