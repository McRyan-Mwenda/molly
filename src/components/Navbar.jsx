import { Link } from "react-router-dom";
import { signOut } from "../reducers/auth";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div
      className="flex justify-between items-center p-4 bg-slate-50"
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
            <button
              className="text-rose-600 hover:text-rose-900 underline"
              onClick={() => dispatch(signOut())}
            >
              Sign out
            </button>
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
