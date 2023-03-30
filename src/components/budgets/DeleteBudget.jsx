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

const DELETE_BUDGET = gql`
  mutation ($id: ID!) {
    deleteBudget(id: $id)
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

const DeleteBudget = ({ id, isDelete, setIsDelete }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deleteBudget, { data: deleteBudgetData, loading, error }] =
    useMutation(DELETE_BUDGET, {
      refetchQueries: [{ query: GET_ALL_BUDGETS }],
    });

  if (deleteBudgetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Budget deleted successfully",
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
        onClick={() => setIsDelete(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          dispatch(removeOldNotification());

          deleteBudget({
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
        header="Delete budget"
        visible={isDelete}
        style={{ width: "50vw" }}
        onHide={() => setIsDelete(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">
          Are you sure you want to delete this budget?
        </p>
      </Dialog>
    </div>
  );
};

export default DeleteBudget;
