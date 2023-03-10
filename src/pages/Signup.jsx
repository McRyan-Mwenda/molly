import { Link } from "react-router-dom";

import PageTitle from "../title";

const Signup = () => {
  PageTitle("Signup");

  return (
    <div className="page">
      <h1 className="text-3xl text-center mt-4">Create new account</h1>
      <div className="mx-auto rounded-md shadow py-8 px-16 my-8 w-2/5 border bg-sky-50">
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="first_name" className="text-gray-600">
              First name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="last_name" className="text-gray-600">
              Last name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password2" className="text-gray-600">
              Confirm password
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-sky-50"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="rounded-md p-4 border w-full bg-emerald-600 text-xl text-gray-50 hover:text-white hover:bg-emerald-700 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <p className="text-center">
        Already got an account? Go to{" "}
        <Link
          to="/app/signin"
          className="text-sky-600 hover:text-sky-900 underline"
        >
          Sign in
        </Link>
        .
      </p>
      <br />
    </div>
  );
};

export default Signup;
