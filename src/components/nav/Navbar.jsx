const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-4 px-36 bg-gradient-to-b from-emerald-50 to-white">
      <span className="font-semibold text-xl">
        <a href="/">Finance Fluent</a>
      </span>
      <menu className="flex justify-evenly items-center nav-menu">
        <div className="dropdown">
          <p className="mx-2 hover:text-emerald-600 cursor-pointer menu-link">
            Solutions <i className="bi bi-caret-down-fill"></i>
          </p>
          <div
            className="dropdown-content pt-4 px-2 bg-gradient-to-t from-emerald-50 to-white"
            style={{
              minWidth: "170px",
            }}
          >
            <a href="" className="hover:text-emerald-600 mt-2 mb-2">
              Business App
            </a>
            <a href="" className="hover:text-emerald-600 mt-2 mb-4">
              Payment Gateway
            </a>
          </div>
        </div>
        <div className="dropdown">
          <p className="mx-2 hover:text-emerald-600 cursor-pointer menu-link">
            Resources <i className="bi bi-caret-down-fill"></i>
          </p>
          <div
            className="dropdown-content pt-4 px-2 bg-gradient-to-t from-emerald-50 to-white"
            style={{
              minWidth: "170px",
            }}
          >
            <a href="" className="hover:text-emerald-600 mt-2 mb-2">
              Upcoming Events
            </a>
            <a href="" className="hover:text-emerald-600 mt-2 mb-2">
              Blog
            </a>
            <a href="" className="hover:text-emerald-600 mt-2 mb-4">
              FAQs
            </a>
          </div>
        </div>
        <a href="/pricing" className="mx-2 hover:text-emerald-600">
          Pricing
        </a>
        <a href="/about" className="mx-2 hover:text-emerald-600">
          About
        </a>
        <a href="/contacts" className="mx-2 hover:text-emerald-600">
          Contacts
        </a>
        <a href="" className=" app-button">
          Go to App
        </a>
      </menu>
    </nav>
  );
};

export default Navbar;
