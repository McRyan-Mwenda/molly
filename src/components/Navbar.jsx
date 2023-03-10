import { Link } from "react-router-dom";

const Navbar = () => {
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
      </div>
      <div className="flex">
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
        <button className="text-rose-600 hover:text-rose-900 underline">
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
