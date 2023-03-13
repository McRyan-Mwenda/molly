import { Link, useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { signIn } from "../reducers/auth";
import { setNotification } from "../reducers/notifications";

import PageTitle from "../title";

const USER_AUTH = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const Signin = ({ setIsLoading }) => {
  PageTitle("Signin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tokenAuth, { data, loading, error }] = useMutation(USER_AUTH);

  if (data) {
    setIsLoading(false);
    dispatch(signIn(data.tokenAuth.token));
    navigate("/app/dashboard");
  }
  if (loading) {
    setIsLoading(true);
  }

  if (error) {
    setIsLoading(false);
    dispatch(
      setNotification({
        message: `${error.message}`,
        type: "error",
      })
    );
  }

  return (
    <div className="page">
      <h1 className="text-3xl text-center mt-4">Signin to your account</h1>
      <div className="mx-auto rounded-md shadow py-8 px-16 my-8 w-2/5 border bg-sky-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            tokenAuth({
              variables: {
                username: e.target.username.value,
                password: e.target.password.value,
              },
            });
          }}
        >
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
          to="/app/signup"
          className="text-sky-600 hover:text-sky-900 underline"
        >
          Sign up
        </Link>
        .
      </p>
      <br />
    </div>
  );
};

export default Signin;
