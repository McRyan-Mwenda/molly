import { useRef } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";

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
  const toast = useRef(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: `${error.message}`,
      life: 3000,
    });
  };

  const [deleteAccount, { data, loading, error }] = useMutation(
    DELETE_ACCOUNT,
    { refetchQueries: [{ query: GET_ALL_ACCOUNTS }] }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    navigate("/app/dashboard");
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
        onClick={() => setIsVisible(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        severity="danger"
        onClick={() =>
          deleteAccount({
            variables: {
              id: id,
            },
          })
        }
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

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </div>
  );
};

export default DeleteAccount;
