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

const DELETE_TARGET = gql`
  mutation ($id: ID!) {
    deleteTarget(id: $id)
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

const DeleteTarget = ({ id, isDelete, setIsDelete }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deleteTarget, { data: deleteTargetData, loading, error }] =
    useMutation(DELETE_TARGET, {
      refetchQueries: [{ query: GET_ALL_TARGETS }],
    });

  if (deleteTargetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Target deleted successfully",
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

          deleteTarget({
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
        header="Delete target"
        visible={isDelete}
        style={{ width: "50vw" }}
        onHide={() => setIsDelete(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">Are you sure you want to delete this target?</p>
      </Dialog>
    </div>
  );
};

export default DeleteTarget;
