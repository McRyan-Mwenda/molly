import { Toast } from "primereact/toast";
import { useState, useRef } from "react";
import { signIn } from "../reducers/auth";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { gql, useMutation } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { Link, useNavigate } from "react-router-dom";

import PageTitle from "../title";

const USER_AUTH = gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const Signin = () => {
  PageTitle("Signin");

  const toast = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "message",
      life: 3000,
    });
  };

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: `${error.message}`,
      life: 3000,
    });
  };

  const [tokenAuth, { data, loading, error }] = useMutation(USER_AUTH);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      signIn({
        username: userName,
        token: data.tokenAuth.token,
      })
    );
    navigate("/app/dashboard");
  }
  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    showError(error);
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
                // username: e.target.username.value,
                username: userName,
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
              onChange={(e) => setUserName(e.target.value)}
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
            <Button
              type="submit"
              label="Submit"
              severity="success"
              className="w-full"
              loading={loading}
            />
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

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </div>
  );
};

export default Signin;
