import { useDispatch } from "react-redux";
import { useMutation, gql } from "@apollo/client";
import { Button } from "primereact/button";
import { setIsLoading } from "../../reducers/loading";
import { activateTwoFA, deactivateTwoFA } from "../../reducers/auth";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const VERIFY_OTP = gql`
  mutation ($otp: String!) {
    verifyOTP(otp: $otp)
  }
`;

const VerifyOTP = () => {
  const dispatch = useDispatch();

  const [verifyOTP, { data, loading, error }] = useMutation(VERIFY_OTP);

  const codeAuth = (data) => {
    if (data.verifyOTP.success === true) {
      dispatch(
        createNewNotification({
          type: "success",
          message: "Two Factor Authentication enabled",
        })
      );
      dispatch(activateTwoFA());
    } else if (data.verifyOTP.success === false) {
      dispatch(
        createNewNotification({
          type: "error",
          message: "Entered invalid OTP code",
        })
      );
      dispatch(deactivateTwoFA());
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
      className="px-4 my-4"
    >
      <div className="mb-2">
        <label htmlFor="otp_code" id="otp_code">
          Six digit code
        </label>
        <input
          type="text"
          name="otp_code"
          id="otp_code"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mt-8">
        <Button
          label="Verify"
          severity="success"
          type="submit"
          className="w-full page-fonts"
          loading={loading}
        />
      </div>
    </form>
  );
};

export default VerifyOTP;
