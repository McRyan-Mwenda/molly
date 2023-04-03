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

const DELETE_MEMBER = gql`
  mutation ($member_id: ID!) {
    deleteTeamMember(member_id: $member_id)
  }
`;

const GET_MEMBER = gql`
  query {
    getTeamMembers {
      user {
        id
        email
        phone_number
        first_name
        last_name
      }
    }
  }
`;

const DeleteMember = ({ id, memberRemove, setMemberRemove }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deleteTeamMember, { data, loading, error }] = useMutation(
    DELETE_MEMBER,
    {
      refetchQueries: [{ query: GET_MEMBER }],
    }
  );

  if (data) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Member deleted successfully",
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

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        security="primary"
        onClick={() => setMemberRemove(false)}
        className="p-button-text"
      />
      <Button
        label="Delete"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          dispatch(removeOldNotification());

          deleteTeamMember({
            variables: {
              member_id: id,
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
        header="Delete member"
        visible={memberRemove}
        style={{ width: "50vw" }}
        onHide={() => setMemberRemove(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">Are you sure you want to remove this member?</p>
      </Dialog>
    </div>
  );
};

export default DeleteMember;
