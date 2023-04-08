import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { upgradeToStandard, upgradeToPro } from "../../reducers/package";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const REGISTER_MPESA_AND_BILL = gql`
  mutation (
    $phone_owner: String!
    $phone_number: String!
    $plan: String!
    $amount: Float!
  ) {
    registerAndBillMpesa(
      phone_owner: $phone_owner
      phone_number: $phone_number
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

const MpesaPayment = ({ slug }) => {
  const dispatch = useDispatch();

  const [registerAndBillMpesa, { data, loading, error }] = useMutation(
    REGISTER_MPESA_AND_BILL,
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

          registerAndBillMpesa({
            variables: {
              phone_owner: e.target.phone_owner.value,
              phone_number: e.target.phone_number.value,
              plan: plan,
              amount: planAmount,
            },
          });
        }}
      >
        <div className="mb-2">
          <label htmlFor="phone_owner" id="phone_owner">
            Phone owner name
          </label>
          <input
            type="text"
            name="phone_owner"
            id="phone_owner"
            placeholder="e.g. John Doe"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number" id="phone_number">
            Phone number
          </label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="e.g. +254712345678"
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

export default MpesaPayment;
