import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";
import GetAccounts from "./GetAccounts";

const CREATE_BUDGET = gql`
  mutation (
    $account_id: ID!
    $budget_name: String!
    $budget_description: String!
    $budget_amount: Float!
    $category: String!
  ) {
    createBudget(
      account_id: $account_id
      budget_name: $budget_name
      budget_description: $budget_description
      budget_amount: $budget_amount
      category: $category
    ) {
      id
    }
  }
`;

const GET_ALL_BUDGETS = gql`
  query {
    getAllBudgets {
      id
      budget_name
      budget_is_active
      category {
        category_name
      }
    }
  }
`;

const NewBudget = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const thisform = useRef(null);

  const [accountData, setAccountData] = useState();

  const [createBudget, { data: createBudgetData, loading, error }] =
    useMutation(CREATE_BUDGET, {
      refetchQueries: [{ query: GET_ALL_BUDGETS }],
    });

  if (createBudgetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Budget created successfully",
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
      header="Add new budget"
      visible={isVisible}
      style={{ width: "50vw" }}
      onHide={() => setIsVisible(false)}
      className="page-fonts"
    >
      <form
        ref={thisform}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(removeOldNotification());

          createBudget({
            variables: {
              account_id: e.target.account_id.value,
              budget_name: e.target.budget_name.value,
              budget_amount: parseFloat(e.target.budget_amount.value),
              budget_description: e.target.description.value,
              category: e.target.category.value,
            },
          });

          thisform.current.reset();
        }}
      >
        <div className="mb-2">
          <label htmlFor="budget_name" id="budget_name">
            Budget name
          </label>
          <input
            type="text"
            name="budget_name"
            id="budget_name"
            placeholder="what are you budgeting for?"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="budget_amount" id="budget_amount">
            Budget amount
          </label>
          <input
            type="number"
            step="any"
            name="budget_amount"
            id="budget_amount"
            defaultValue="0.0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="category" id="category">
            Budget category
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
          <label htmlFor="description" id="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="more details about this budget"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="account_id" id="account_id  ">
            Connect to account
          </label>
          <select
            name="account_id"
            id="account_id"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option selected disabled className="bg-gray-50 text-gray-400">
              Select from list
            </option>
            {accountData &&
              accountData.getAllAccounts.map((account, index) => {
                const list = (
                  <>
                    <option key={index} value={account.id}>
                      {account.account_name}
                    </option>
                  </>
                );

                return list;
              })}
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

      <GetAccounts setAccountData={setAccountData} />
    </Dialog>
  );
};

export default NewBudget;
