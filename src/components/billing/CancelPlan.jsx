import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { downgradeToFree } from "../../reducers/package";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const CANCEL_PLAN = gql`
  mutation ($payment_method: String!) {
    cancelPlan(payment_method: $payment_method)
  }
`;

const GET_PROFILE = gql`
  query {
    getProfile {
      workspace_uid
      payment_method
      is_paid_user
      is_employee
      created_at
      user {
        email
        first_name
        last_name
      }
      package {
        name
        accounts
        no_of_accounts
        budgets
        no_of_budgets
        targets
        no_of_targets
        teams
        no_of_teams
        pdf_reports
        ai_assistant
      }
    }
  }
`;

const CancelPlan = ({ payment_method }) => {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const [cancelPlan, { loading, error, data }] = useMutation(CANCEL_PLAN, {
    refetchQueries: [{ query: GET_PROFILE }],
  });

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message:
          "You have cancelled your subscription and are now subscribed to the free plan",
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

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        security="primary"
        onClick={() => setIsVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Yes, I'm sure"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          dispatch(removeOldNotification());

          dispatch(downgradeToFree());

          // cancelPlan({
          //   variables: {
          //     payment_method: payment_method,
          //   },
          // });
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div>
      <Button
        label="Cancel current plan & revert to 'Free' plan"
        severity="danger"
        outlined
        className="page-fonts absolute hover:shadow-md"
        onClick={() => setIsVisible(true)}
      />

      {/* confirm cancel payment */}
      <Dialog
        header="Cancel current plan & revert to 'Free' plan"
        visible={isVisible}
        style={{ width: "50vw" }}
        onHide={() => setIsVisible(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">
          Are you sure you want to cancel your current plan and revert to the
          free plan?
        </p>
      </Dialog>
      {/* confirm cancel payment */}
    </div>
  );
};

export default CancelPlan;
