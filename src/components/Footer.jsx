const Footer = () => {
  return (
    <div className="px-4 py-8" id="footer">
      <div className="flex justify-between items-center">
        <p>&copy; 2023 FinanceFluid</p>
        <p>
          Made with love by{" "}
          <a href="https://freedomloisa.netlify.app/">Freedom Loisa</a>
        </p>
        <div className="flex items-center">
          <a href="https://github.com/LoisaKitakaya" className="px-2">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/loisa-kitakaya-37ba99212/"
            className="px-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
