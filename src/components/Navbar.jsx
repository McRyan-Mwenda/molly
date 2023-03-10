import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4" id="navbar">
      <Link to="/">FinanceFluent</Link>
      <div className="flex">
        <Link className="mx-2" to="/about">
          About
        </Link>
        <Link className="mx-2" to="/pricing">
          Pricing
        </Link>
        <Link className="mx-2" to="/contacts">
          Contacts
        </Link>
      </div>
      <div className="flex">
        <Link to="/app/signin" className="mr-4">
          Sign in
        </Link>
        <Link to="/app/signup" className="mr-4">
          Sign up
        </Link>
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Navbar;
