import { useDispatch, useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { setNotification } from "../../reducers/notifications";

const DELETE_ACCOUNT = gql`
  mutation ($id: ID!) {
    deleteAccount(id: $id)
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

const DeleteAccount = ({ daVisible, daSetVisible }) => {
  const dispatch = useDispatch();
  const myAccounts = useSelector((state) => state.account.userAccounts);

  const [deleteAccount, { data, loading, error }] = useMutation(
    DELETE_ACCOUNT,
    {
      refetchQueries: [{ query: GET_ALL_ACCOUNTS }],
    }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      setNotification({
        message: `Action successful: ${data.deleteAccount}`,
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
      header="Delete an account"
      visible={daVisible}
      style={{ width: "50vw" }}
      onHide={() => daSetVisible(false)}
      className="page-fonts"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();

          deleteAccount({
            variables: {
              id: e.target.account_id.value,
            },
          });
        }}
      >
        <div className="mb-2">
          <label htmlFor="account_id" id="account_id">
            Account to delete
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
        <div className="mt-8">
          <Button
            label="Delete"
            severity="danger"
            type="submit"
            className="w-full page-fonts"
            loading={loading}
          />
        </div>
      </form>
    </Dialog>
  );
};

export default DeleteAccount;
