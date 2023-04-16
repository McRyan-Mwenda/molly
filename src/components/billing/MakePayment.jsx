import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { upgradeToStandard, upgradeToPro } from "../../reducers/package";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

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
        phone_number
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
    slug === "standard"
      ? dispatch(upgradeToStandard())
      : dispatch(upgradeToPro());
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
            <div className="mb-2">
              <label htmlFor="cardholder_name" id="cardholder_name">
                Cardholder name
              </label>
              <input
                type="text"
                name="cardholder_name"
                id="cardholder_name"
                placeholder="e.g. John Doe"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="card_number" id="card_number">
                Card number
              </label>
              <input
                type="text"
                name="card_number"
                id="card_number"
                placeholder="e.g. 987564378365"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="expiration_year" id="expiration_year">
                Expiration year
              </label>
              <input
                type="number"
                name="expiration_year"
                id="expiration_year"
                min="1900"
                max="2099"
                placeholder="e.g. 2024"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="expiration_month" id="expiration_month">
                Expiration month
              </label>
              <input
                type="number"
                name="expiration_month"
                id="expiration_month"
                min="01"
                max="12"
                placeholder="e.g. 02"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="cvc" id="cvc">
                CVC
              </label>
              <input
                type="number"
                name="cvc"
                id="cvc"
                placeholder="e.g. 100"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mt-4">
              <Button
                type="submit"
                label="Submit"
                severity="success"
                className="w-full page-fonts absolute hover:shadow-md"
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
