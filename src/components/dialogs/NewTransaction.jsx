import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const NEW_TRANSACTION = gql`
  mutation (
    $account_id: ID!
    $transaction_type: String!
    $transaction_amount: Float!
    $transaction_date: String!
    $currency_code: String!
    $description: String!
    $category: String!
  ) {
    createTransaction(
      account_id: $account_id
      transaction_type: $transaction_type
      transaction_amount: $transaction_amount
      transaction_date: $transaction_date
      currency_code: $currency_code
      description: $description
      category: $category
    ) {
      transaction_type
      transaction_amount
      currency_code
      transaction_date
      description
      created_at
      updated_at
      category {
        category_name
        category_description
      }
    }
  }
`;

const GET_TRANSACTION = gql`
  query ($id: ID!) {
    getTransactionsByAccount(id: $id) {
      transaction_type
      transaction_amount
      currency_code
      transaction_date
      description
      created_at
      updated_at
      category {
        category_name
        category_description
      }
    }
  }
`;

const GET_ACCOUNT = gql`
  query ($id: ID!) {
    getAccount(id: $id) {
      id
      account_name
      account_type
      account_number
      account_balance
      currency_code
      created_at
      updated_at
    }
  }
`;

const NewTransaction = ({ id, currency, isNew, setIsNew }) => {
  const dispatch = useDispatch();

  const [createTransaction, { data: createTransactionData, loading, error }] =
    useMutation(NEW_TRANSACTION, {
      refetchQueries: [
        { query: GET_TRANSACTION, variables: { id: id } },
        { query: GET_ACCOUNT, variables: { id: id } },
      ],
    });

  if (createTransactionData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Transaction created successfully",
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
    <Dialog
      header="Add new transaction"
      visible={isNew}
      style={{ width: "50vw" }}
      onHide={() => setIsNew(false)}
      className="page-fonts"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(removeOldNotification());

          createTransaction({
            variables: {
              account_id: id,
              transaction_type: e.target.transaction_type.value,
              transaction_amount: parseFloat(e.target.transaction_amount.value),
              transaction_date: e.target.transaction_date.value,
              currency_code: currency,
              description: e.target.description.value,
              category: e.target.category.value,
            },
          });
        }}
      >
        <div className="mb-2">
          <label htmlFor="transaction_type" id="transaction_type">
            Transaction type
          </label>
          <select
            name="transaction_type"
            id="transaction_type"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            <option value="receivable">Account receivable</option>
            <option value="payable">Account payable</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="transaction_amount" id="transaction_amount">
            Transaction amount
          </label>
          <input
            type="number"
            step="any"
            name="transaction_amount"
            id="transaction_amount"
            defaultValue="0.0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="category" id="category">
            Transaction category
          </label>
          <select
            name="category"
            id="category"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            <option value="Purchases">Purchases</option>
            <option value="Investments">Investments</option>
            <option value="Loans">Loans</option>
            <option value="Donations">Donations</option>
            <option value="Transfers">Transfers</option>
            <option value="Payments">Payments</option>
            <option value="Exchanges">Exchanges</option>
            <option value="Gifts">Gifts</option>
            <option value="Sales">Sales</option>
            <option value="Payroll">Payroll</option>
            <option value="Mergers & acquisitions">
              Mergers & acquisitions
            </option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="transaction_date" id="transaction_date">
            Transaction date
          </label>
          <input
            type="datetime-local"
            name="transaction_date"
            id="transaction_date"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="description" id="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="more details about transaction"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
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

export default NewTransaction;
