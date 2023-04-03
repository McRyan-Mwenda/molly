import GetAccounts from "./GetAccounts";
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

const CREATE_TARGET = gql`
  mutation (
    $account_id: ID!
    $target_name: String!
    $target_description: String!
    $target_amount: Float!
    $category: String!
  ) {
    createTarget(
      account_id: $account_id
      target_name: $target_name
      target_description: $target_description
      target_amount: $target_amount
      category: $category
    ) {
      id
    }
  }
`;

const GET_ALL_TARGETS = gql`
  query {
    getAllTargets {
      id
      target_name
      target_is_active
      category {
        category_name
      }
    }
  }
`;

const NewTarget = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const thisform = useRef(null);

  const [accountData, setAccountData] = useState();

  const [createTarget, { data: createTargetData, loading, error }] =
    useMutation(CREATE_TARGET, {
      refetchQueries: [{ query: GET_ALL_TARGETS }],
    });

  if (createTargetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Target created successfully",
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
      header="Add new target"
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

          createTarget({
            variables: {
              account_id: e.target.account_id.value,
              target_name: e.target.target_name.value,
              target_amount: parseFloat(e.target.target_amount.value),
              target_description: e.target.description.value,
              category: e.target.category.value,
            },
          });

          thisform.current.reset();
        }}
      >
        <div className="mb-2">
          <label htmlFor="target_name" id="target_name">
            Target name
          </label>
          <input
            type="text"
            name="target_name"
            id="target_name"
            placeholder="what are you targeting for?"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="target_amount" id="target_amount">
            Target amount
          </label>
          <input
            type="number"
            step="any"
            name="target_amount"
            id="target_amount"
            defaultValue="0.0"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="category" id="category">
            Target category
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
            placeholder="more details about this target"
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

export default NewTarget;
