import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";

const CREATE_ACCOUNT = gql`
  mutation (
    $account_name: String!
    $account_type: String!
    $account_balance: Float!
    $currency_code: String!
  ) {
    createAccount(
      account_name: $account_name
      account_type: $account_type
      account_balance: $account_balance
      currency_code: $currency_code
    ) {
      account_name
      account_type
      account_balance
      currency_code
    }
  }
`;

const GET_ALL_ACCOUNTS = gql`
  query {
    getAllAccounts {
      id
      account_name
      account_type
    }
  }
`;

const NewAccount = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const toast = useRef(null);

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: `${error.message}`,
      life: 3000,
    });
  };

  const [createAccount, { data, loading, error }] = useMutation(
    CREATE_ACCOUNT,
    {
      refetchQueries: [{ query: GET_ALL_ACCOUNTS }],
    }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    showError(error);
  }

  return (
    <Dialog
      header="Add new account"
      visible={isVisible}
      style={{ width: "50vw" }}
      onHide={() => setIsVisible(false)}
      className="page-fonts"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          createAccount({
            variables: {
              account_name: e.target.account_name.value,
              account_type: e.target.account_type.value,
              account_balance: parseFloat(e.target.account_balance.value),
              currency_code: e.target.currency_code.value,
            },
          });
        }}
      >
        <div className="mb-2">
          <label htmlFor="account_name" id="account_name">
            Account name
          </label>
          <input
            type="text"
            name="account_name"
            id="account_name"
            placeholder="name of account"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="account_type" id="account_type">
            Account type
          </label>
          <select
            name="account_type"
            id="account_type"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
            <option value="credit">Credit</option>
            <option value="investment">Investment</option>
            <option value="retirement">Retirement</option>
            <option value="insurance">Insurance</option>
            <option value="mortgage">Mortgage</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="account_balance" id="account_balance">
            Account balance
          </label>
          <input
            type="number"
            step="any"
            name="account_balance"
            id="account_balance"
            defaultValue="0.0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="currency_code" id="currency_code">
            Currency
          </label>
          <select
            name="currency_code"
            id="currency_code"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            <option value="KES">Kenyan Shilling</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
          </select>
        </div>
        <div className="mt-8">
          <Button
            label="Submit"
            severity="primary"
            type="submit"
            className="w-full page-fonts"
            loading={loading}
          />
        </div>
      </form>

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </Dialog>
  );
};

export default NewAccount;
