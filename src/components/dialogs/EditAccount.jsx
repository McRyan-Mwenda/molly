import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../reducers/notifications";

const UPDATE_ACCOUNT = gql`
  mutation (
    $id: ID!
    $account_name: String!
    $account_type: String!
    $account_balance: Float!
    $currency_code: String!
  ) {
    updateAccount(
      id: $id
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
      account_name
      account_type
      account_balance
      currency_code
      created_at
      updated_at
    }
  }
`;

const EditAccount = ({ eaVisible, eaSetVisible }) => {
  const dispatch = useDispatch();
  const myAccounts = useSelector((state) => state.account.userAccounts);

  const [updateAccount, { data, loading, error }] = useMutation(
    UPDATE_ACCOUNT,
    {
      refetchQueries: [{ query: GET_ALL_ACCOUNTS }],
    }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      setNotification({
        message: `Updated successful: ${data.updateAccount.account_name}`,
        type: "success",
      })
    );
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      setNotification({
        message: `${error.message}`,
        type: "error",
      })
    );
  }

  return (
    <Dialog
      header="Edit an account"
      visible={eaVisible}
      style={{ width: "50vw" }}
      onHide={() => eaSetVisible(false)}
      className="page-fonts"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          updateAccount({
            variables: {
              id: e.target.account_id.value,
              account_name: e.target.account_name.value,
              account_type: e.target.account_type.value,
              account_balance: parseFloat(e.target.account_balance.value),
              currency_code: e.target.currency_code.value,
            },
          });
        }}
      >
        <div className="mb-2">
          <label htmlFor="account_id" id="account_id">
            Account to modify
          </label>
          <select
            name="account_id"
            id="account_id"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            {myAccounts.map((this_account, index) => {
              const list = (
                <>
                  <option value={this_account.id} key={index}>
                    {this_account.name}
                  </option>
                </>
              );

              return list;
            })}
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="account_name" id="account_name">
            Account name
          </label>
          <input
            type="text"
            name="account_name"
            id="account_name"
            placeholder="new name of account"
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
    </Dialog>
  );
};

export default EditAccount;
