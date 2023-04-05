import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 py-8 bg-slate-200" id="footer">
      <div className="flex justify-between items-center">
        <p>&copy; 2023 FinanceFluid 💵</p>
        <div className="flex items-center">
          <i class="bi bi-dot"></i>
          <Link
            to="/terms&conditions"
            className="text-blue-600 hover:text-blue-900 mx-1"
          >
            Terms & Conditions
          </Link>
          <i class="bi bi-dot"></i>
          <Link
            to="/sitepolicies"
            className="text-blue-600 hover:text-blue-900 mx-1"
          >
            Site Policies
          </Link>
          <i class="bi bi-dot"></i>
        </div>
        <div className="flex items-center">
          <a
            href="https://freedomloisa.netlify.app/"
            className="text-sky-600 px-2"
          >
            <i class="bi bi-globe2 text-xl"></i>
          </a>
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
