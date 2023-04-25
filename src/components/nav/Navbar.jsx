const Navbar = () => {

  return (
    <nav className="flex justify-between items-center sticky w-full py-4 px-8">
      <span className="logo">
        <a href="">Finance Fluent</a>
      </span>
      <menu className="flex justify-evenly items-center nav-menu shadow-md">
        <a href="" className="nav-link">
          About
        </a>
        <a href="" className="nav-link">
          Solutions
        </a>
        <a href="" className="nav-link">
          Pricing
        </a>
        <a href="" className="nav-link">
          Resources
        </a>
        <a href="" className="nav-link">
          Contacts
        </a>
        <a href="" className="nav-link app-button">
          Go to App
        </a>
      </menu>
    </nav>
  );
};

export default Navbar;
