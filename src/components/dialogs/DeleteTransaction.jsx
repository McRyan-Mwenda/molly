import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";

const DELETE_TRANSACTION = gql`
  mutation ($id: ID!, $account_id: ID!) {
    deleteTransaction(id: $id, account_id: $account_id)
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

const DeleteTransaction = ({
  selectedProduct,
  account_id,
  isDelete,
  setIsDelete,
}) => {
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

  const [deleteTransaction, { data, loading, error }] = useMutation(
    DELETE_TRANSACTION,
    {
      refetchQueries: [
        { query: GET_TRANSACTION, variables: { id: account_id } },
        { query: GET_ACCOUNT, variables: { id: account_id } },
      ],
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

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        security="primary"
        onClick={() => setIsDelete(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          deleteTransaction({
            variables: {
              id: selectedProduct.id,
              account_id: account_id,
            },
          });
          setIsDelete(false);
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div>
      <Dialog
        header="Delete transaction"
        visible={isDelete}
        style={{ width: "50vw" }}
        onHide={() => setIsDelete(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">
          Are you sure you want to delete this transaction?
        </p>
      </Dialog>

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </div>
  );
};

export default DeleteTransaction;
