const Footer = () => {
  return (
    <div className="px-4 py-8 bg-slate-200" id="footer">
      <div className="flex justify-between items-center">
        <p>&copy; 2023 FinanceFluid 💵</p>
        <p>
          Made with <i className="bi bi-heart-fill text-red-600"></i> by{" "}
          <a
            href="https://freedomloisa.netlify.app/"
            className="text-sky-600 hover:text-sky-900 underline"
          >
            Freedom Loisa
          </a>
        </p>
        <div className="flex items-center">
          <a href="https://github.com/LoisaKitakaya" className="px-2">
            <i className="bi bi-github text-black text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/loisa-kitakaya-37ba99212/"
            className="px-2"
          >
            <i className="bi bi-linkedin text-blue-600 text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
