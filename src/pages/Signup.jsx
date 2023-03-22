import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { gql, useMutation } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { Link, useNavigate } from "react-router-dom";
import {
  createNewNotification,
  removeOldNotification,
} from "../reducers/notifications";

import PageTitle from "../title";

const CREATE_USER = gql`
  mutation (
    $username: String!
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
    $password2: String!
  ) {
    createUser(
      username: $username
      email: $email
      first_name: $first_name
      last_name: $last_name
      password: $password
      password2: $password2
    ) {
      email
      username
      first_name
      last_name
    }
  }
`;

const Signup = () => {
  PageTitle("Signup");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "User account created successfully",
      })
    );
    navigate("/app/signin");
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({ type: "error", message: `${error.message}` })
    );
  }

  return (
    <div className="page">
      <h1 className="text-3xl text-center mt-4">Create new account</h1>
      <div className="mx-auto rounded-md shadow py-8 px-16 my-8 w-2/5 border bg-sky-50">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(removeOldNotification());

            createUser({
              variables: {
                username: e.target.username.value,
                email: e.target.email.value,
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                password: e.target.password.value,
                password2: e.target.password2.value,
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
            <Button
              type="submit"
              label="Submit"
              severity="success"
              className="w-full page-fonts"
              loading={loading}
            />
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
