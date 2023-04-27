import android from "./img/googleplay.webp";
import apple from "./img/applestore.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-emerald-50 to-white mt-20 pt-2">
      <div className="flex justify-between mx-36 pb-16">
        <div className="mt-2">
          <h4 className="text-xl font-semibold mb-2">Download Our App</h4>
          <div className="flex justify-start items-center">
            <a href="">
              <img className="mr-4" src={android} alt="play store sticker" />
            </a>
            <a href="">
              <img className="mr-4" src={apple} alt="apple store sticker" />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-xl mb-2 font-semibold">Solutions</h4>
          <a href="" className="hover:text-emerald-600">
            Payment Gateway
          </a>
          <a href="" className="hover:text-emerald-600">
            Business App
          </a>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-xl mb-2 font-semibold">Resources</h4>
          <a href="" className="hover:text-emerald-600">
            Upcoming Events
          </a>
          <a href="" className="hover:text-emerald-600">
            Blog
          </a>
          <a href="" className="hover:text-emerald-600">
            FAQs
          </a>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-xl mb-2 font-semibold">Support</h4>
          <a href="" className="hover:text-emerald-600">
            Contact us
          </a>
          <a href="" className="hover:text-emerald-600">
            Security
          </a>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-xl mb-2 font-semibold">Policies</h4>
          <a href="" className="hover:text-emerald-600">
            Terms & conditions
          </a>
          <a href="" className="hover:text-emerald-600">
            Privacy
          </a>
        </div>
      </div>
      <div className="border-b border-gray-400"></div>
      <div className="flex justify-between items-center mx-36">
        <p>&#169; Finance Fluent 2023. All rights reserved.</p>
        <div className="flex justify-around items-center py-1 social">
          <a href="" className="ml-4 text-emerald-500 hover:text-emerald-600">
            <i class="bi bi-discord text-xl"></i>
          </a>
          <a href="" className="ml-4 text-emerald-500 hover:text-emerald-600">
            <i class="bi bi-youtube text-xl"></i>
          </a>
          <a href="" className="ml-4 text-emerald-500 hover:text-emerald-600">
            <i class="bi bi-twitter text-xl"></i>
          </a>
          <a href="" className="ml-4 text-emerald-500 hover:text-emerald-600">
            <i class="bi bi-envelope-at-fill text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
