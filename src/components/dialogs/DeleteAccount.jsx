import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const DELETE_ACCOUNT = gql`
  mutation ($id: ID!) {
    deleteAccount(id: $id)
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

const DeleteAccount = ({ isVisible, setIsVisible, id }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deleteAccount, { data: deleteAccountData, loading, error }] =
    useMutation(DELETE_ACCOUNT, {
      refetchQueries: [{ query: GET_ALL_ACCOUNTS }],
    });

  if (deleteAccountData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Account deleted successfully",
      })
    );
    navigate("/app/dashboard");
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

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        security="primary"
        onClick={() => setIsVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          dispatch(removeOldNotification());

          deleteAccount({
            variables: {
              id: id,
            },
          });
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div>
      <Dialog
        header="Delete account"
        visible={isVisible}
        style={{ width: "50vw" }}
        onHide={() => setIsVisible(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">
          Are you sure you want to delete this account?
        </p>
      </Dialog>
    </div>
  );
};

export default DeleteAccount;
