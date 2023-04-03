import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation, gql } from "@apollo/client";
import { InputSwitch } from "primereact/inputswitch";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const UPDATE_TARGET = gql`
  mutation ($id: ID!, $status: Boolean!) {
    targetStatus(id: $id, status: $status)
  }
`;

const GET_BUDGET = gql`
  query ($id: ID!) {
    getTarget(id: $id) {
      id
      target_name
      target_description
      target_is_active
      target_amount
      category {
        category_name
      }
      created_at
      updated_at
    }
  }
`;

const UpdateTarget = ({ id, currentStatus }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(currentStatus);

  const [targetStatus, { data: updateTargetData, loading, error }] =
    useMutation(UPDATE_TARGET, {
      refetchQueries: [{ query: GET_BUDGET, variables: { id: id } }],
    });

  if (updateTargetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Target status changed successfully",
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
    <InputSwitch
      className="mt-2"
      checked={checked}
      onChange={(e) => {
        dispatch(removeOldNotification());

        targetStatus({
          variables: {
            id: id,
            status: e.value,
          },
        });

        setChecked(e.value);
      }}
    />
  );
};

export default UpdateTarget;
