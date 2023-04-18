import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const REQUEST_BILLING = gql`
  mutation ($payment_method: String!) {
    requestBilling(payment_method: $payment_method)
  }
`;

const BillingHistory = ({ payment_method }) => {
  const dispatch = useDispatch();

  const [requestBilling, { loading, error, data }] =
    useMutation(REQUEST_BILLING);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message:
          "Your billing history has been sent to the email you signed up with",
      })
    );
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
    <div>
      <Button
        label="Request Billing History"
        severity="primary"
        className="w-full page-fonts absolute hover:shadow-md"
        outlined
        loading={loading}
        onClick={() => {
          dispatch(removeOldNotification());
          
          // requestBilling({ variables: { payment_method: payment_method } });
        }}
      />
    </div>
  );
};

export default BillingHistory;
