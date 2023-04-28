import PageTitle from "../assets/title";

const Pricing = () => {
  PageTitle("Pricing");

  return (
    <div className="page">
      <h3 className="text-3xl text-center font-semibold text-emerald-600 my-12">
        Choose Your Plan
      </h3>
      <div className="flex justify-between items-center mx-36 mb-20">
        <div className="rounded-md shadow-md p-4 flex flex-col items-center">
          <div className="text-center rounded-md bg-gradient-to-b from-emerald-50 to-white w-full p-4">
            <p className="font-bold text-lg mb-2">Free</p>
            <span
              className="font-bold text-emerald-600 mb-2"
              style={{
                fontSize: "80px",
              }}
            >
              <span className="text-xl">$</span>
              <span>0</span>
              <span className="text-xl">/mo</span>
            </span>
            <p className="mb-4">
              suitable for new users who want to try out the product
            </p>
            <button className="py-2 px-4 rounded-md mb-4 bg-emerald-500 hover:bg-emerald-600">
              <a href="" className="text-gray-100 hover:text-white">
                Subscribe
              </a>
            </button>
          </div>
          <div className="border-t border-emerald-300 w-full"></div>
          <div className="text-center pt-4 rounded-md bg-gradient-to-t from-emerald-50 to-white w-full">
            <p className="my-4 font-semibold text-lg">Available Features</p>
            <ul className="my-4">
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-4"></div>
        <div className="rounded-md shadow-md p-4 flex flex-col items-center">
          <div className="text-center rounded-md bg-gradient-to-b from-emerald-50 to-white w-full p-4">
            <p className="font-bold text-lg mb-2">Standard</p>
            <span
              className="font-bold text-emerald-600 mb-2"
              style={{
                fontSize: "80px",
              }}
            >
              <span className="text-xl">$</span>
              <span>10</span>
              <span className="text-xl">/mo</span>
            </span>
            <p className="mb-4">
              suitable for new users who want to try out the product
            </p>
            <button className="py-2 px-4 rounded-md mb-4 bg-emerald-500 hover:bg-emerald-600">
              <a href="" className="text-gray-100 hover:text-white">
                Subscribe
              </a>
            </button>
          </div>
          <div className="border-t border-emerald-300 w-full"></div>
          <div className="text-center pt-4 rounded-md bg-gradient-to-t from-emerald-50 to-white w-full">
            <p className="my-4 font-semibold text-lg">Available Features</p>
            <ul className="my-4">
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-4"></div>
        <div className="rounded-md shadow-md p-4 flex flex-col items-center">
          <div className="text-center rounded-md bg-gradient-to-b from-emerald-50 to-white w-full p-4">
            <p className="font-bold text-lg mb-2">Pro</p>
            <span
              className="font-bold text-emerald-600 mb-2"
              style={{
                fontSize: "80px",
              }}
            >
              <span className="text-xl">$</span>
              <span>25</span>
              <span className="text-xl">/mo</span>
            </span>
            <p className="mb-4">
              suitable for new users who want to try out the product
            </p>
            <button className="py-2 px-4 rounded-md mb-4 bg-emerald-500 hover:bg-emerald-600">
              <a href="" className="text-gray-100 hover:text-white">
                Subscribe
              </a>
            </button>
          </div>
          <div className="border-t border-emerald-300 w-full"></div>
          <div className="text-center pt-4 rounded-md bg-gradient-to-t from-emerald-50 to-white w-full">
            <p className="my-4 font-semibold text-lg">Available Features</p>
            <ul className="my-4">
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
              <li className="mb-2">
                <i className="bi bi-caret-right-fill text-emerald-600"></i>{" "}
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
