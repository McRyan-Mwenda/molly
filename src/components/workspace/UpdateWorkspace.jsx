import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const UPDATE_WORKSPACE = gql`
  mutation ($name: String!) {
    updateWorkspace(name: $name) {
      name
    }
  }
`;

const GET_WORKSPACES = gql`
  query {
    getWorkspace {
      name
      workspace_uid
    }
  }
`;

const UpdateWorkspace = ({ updateVisible, setUpdateVisible }) => {
  const dispatch = useDispatch();

  const thisform = useRef(null);

  const [updateWorkspace, { data, loading, error }] = useMutation(
    UPDATE_WORKSPACE,
    {
      refetchQueries: [{ query: GET_WORKSPACES }],
    }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Workspace updated successfully",
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
      header="Edit workspace"
      visible={updateVisible}
      style={{ width: "50vw" }}
      onHide={() => setUpdateVisible(false)}
      className="page-fonts"
    >
      <form
        ref={thisform}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(removeOldNotification());

          updateWorkspace({
            variables: {
              name: e.target.workspace_name.value,
            },
          });

          thisform.current.reset();
        }}
      >
        <div className="mb-2">
          <label htmlFor="workspace_name" id="workspace_name">
            Workspace name
          </label>
          <input
            type="text"
            name="workspace_name"
            id="workspace_name"
            placeholder="New workspace name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
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

export default UpdateWorkspace;
