import { Menu } from "primereact/menu";
import { useRef, useState } from "react";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { signOut } from "../../reducers/auth";
import EditProfile from "../dialogs/EditProfile";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const menu = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isTwoFA = useSelector((state) => state.auth.twoFA);

  const items = [
    {
      label: "Options",
      items: [
        {
          label: isTwoFA ? (
            "Profile"
          ) : (
            <>
              <p className="p-overlay-badge w-fit">
                <span className="pr-4">Profile</span>{" "}
                <Badge severity="danger" size="normal"></Badge>
              </p>
            </>
          ),
          icon: "pi pi-info-circle",
          command: () => navigate("/app/dashboard/profile"),
        },
        {
          label: "Update",
          icon: "pi pi-refresh",
          command: () => setIsVisible(true),
        },
        {
          label: "Upgrade",
          icon: "pi pi-lock-open",
          command: () => navigate("/pricing"),
        },
        {
          label: "Log out",
          icon: "pi pi-upload",
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
              <Avatar
                icon="pi pi-user"
                className="shadow border border-zinc-300 cursor-pointer"
                shape="circle"
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
