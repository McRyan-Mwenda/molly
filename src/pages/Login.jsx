import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { gql, useMutation } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { Link, useNavigate } from "react-router-dom";
import {
  createNewNotification,
  removeOldNotification,
} from "../reducers/notifications";

const VERIFY_OTP = gql`
  mutation ($otp: String!) {
    verifyOTP(otp: $otp)
  }
`;

import PageTitle from "../title";

const Login = () => {
  PageTitle("Signin");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [verifyOTP, { data, loading, error }] = useMutation(VERIFY_OTP);

  const codeAuth = (data) => {
    if (data.verifyOTP.success === true) {
      navigate("/app/dashboard");
    } else if (data.verifyOTP.success === false) {
      dispatch(
        createNewNotification({
          type: "error",
          message: "Entered invalid OTP code",
        })
      );
    }
  };

  if (data) {
    dispatch(setIsLoading({ status: false }));
    codeAuth(data);
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
      <h1 className="text-3xl text-center mt-4">Signin to your account</h1>
      <div
        className="mx-auto py-8 px-12 my-8 rounded-md shadow-lg bg-slate-50"
        style={{ width: "35%" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(removeOldNotification());

            verifyOTP({
              variables: {
                otp: e.target.otp_code.value,
              },
            });
          }}
        >
          <div className="mb-4">
            <label htmlFor="otp_code" className="text-gray-600">
              Six digit OTP code
            </label>
            <input
              type="text"
              name="otp_code"
              id="otp_code"
              className="block w-full px-2 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-gray-500 bg-slate-50"
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
        Don't have an account? Go to{" "}
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

export default Login;
