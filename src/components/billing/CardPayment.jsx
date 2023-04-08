import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { upgradeToStandard, upgradeToPro } from "../../reducers/package";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const REGISTER_CARD_AND_BILL = gql`
  mutation (
    $cardholder_name: String!
    $card_number: String!
    $expiration_month: Int!
    $expiration_year: Int!
    $cvc: String!
    $plan: String!
    $amount: Float!
  ) {
    registerAndBillCard(
      cardholder_name: $cardholder_name
      card_number: $card_number
      expiration_month: $expiration_month
      expiration_year: $expiration_year
      cvc: $cvc
      plan: $plan
      amount: $amount
    ) {
      id
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

const CardPayment = ({ slug }) => {
  const dispatch = useDispatch();

  const [registerAndBillCard, { data, loading, error }] = useMutation(
    REGISTER_CARD_AND_BILL,
    { refetchQueries: [{ query: GET_PROFILE }] }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: `Your are now subscribed to ${slug} plan`,
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

  const planAmount = slug === "standard" ? 10.0 : 15.0;

  const plan = slug === "standard" ? "Standard" : "Pro";

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(removeOldNotification());

          registerAndBillCard({
            variables: {
              cardholder_name: e.target.cardholder_name.value,
              card_number: e.target.card_number.value,
              expiration_month: parseInt(e.target.expiration_month.value),
              expiration_year: parseInt(e.target.expiration_year.value),
              cvc: e.target.cvc.value,
              plan: plan,
              amount: planAmount,
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
    </div>
  );
};

export default CardPayment;
