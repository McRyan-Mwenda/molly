import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";
import BillingInfo from "./BillingInfo";

const MAKE_PAYMENT = gql`
  mutation ($plan: String!) {
    subscribeToPlan(plan: $plan) {
      redirect_url
    }
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

const MakePayment = ({ slug }) => {
  const dispatch = useDispatch();

  const [subscribeToPlan, { data, loading, error }] = useMutation(
    MAKE_PAYMENT,
    { refetchQueries: [{ query: GET_PROFILE }] }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "info",
        message: "Make payment to begin processing",
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

  const plan = slug === "standard" ? "Standard" : "Pro";

  return (
    <div>
      {data ? (
        <>
          <iframe
            className="w-full my-4 page-fonts"
            style={{
              minHeight: "450px",
            }}
            src={data.subscribeToPlan.redirect_url}
            frameborder="0"
          ></iframe>
        </>
      ) : (
        <>
          <form
            style={{
              minHeight: "450px",
            }}
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(removeOldNotification());

              subscribeToPlan({
                variables: {
                  plan: plan,
                },
              });
            }}
          >
            <BillingInfo />
            <div className="mt-4">
              <Button
                type="submit"
                label={`Subscribe to ${
                  slug === "standard" ? "Standard" : "Pro"
                } plan`}
                severity="success"
                className="w-full page-fonts absolute hover:shadow-md"
                style={{
                  marginTop: "10.5rem",
                }}
                outlined
                loading={loading}
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default MakePayment;
