import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { signOut } from "../../reducers/auth";
import { useMutation, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  createNewNotification,
  removeOldNotification,
} from "../../reducers/notifications";

const UPDATE_USER = gql`
  mutation (
    $email: String!
    $phone_number: String!
    $first_name: String!
    $last_name: String!
  ) {
    updateUser(
      email: $email
      phone_number: $phone_number
      first_name: $first_name
      last_name: $last_name
    ) {
      id
    }
  }
`;

const GET_PROFILE = gql`
  query {
    getProfile {
      workspace_uid
      payment_method
      is_paid_user
      is_employee
      created_at
      user {
        email
        first_name
        last_name
      }
      package {
        name
        accounts
        no_of_accounts
        budgets
        no_of_budgets
        targets
        no_of_targets
        teams
        no_of_teams
        pdf_reports
        ai_assistant
      }
    }
  }
`;

const EditProfile = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const thisform = useRef(null);

  const [updateUser, { data: updateUserData, loading, error }] = useMutation(
    UPDATE_USER,
    {
      refetchQueries: [{ query: GET_PROFILE }],
    }
  );

  if (updateUserData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Profile updated successfully",
      })
    );
    dispatch(signOut());
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
      header="Edit your profile"
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

          updateUser({
            variables: {
              email: e.target.email.value,
              phone_number: e.target.phone_number.value,
              first_name: e.target.first_name.value,
              last_name: e.target.last_name.value,
            },
          });

          thisform.current.reset();
        }}
      >
        <div className="mb-2">
          <label htmlFor="email" id="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="new email address"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone_number" className="text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="e.g. +254712345678"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="first_name" id="first_name">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="new first name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="last_name" id="last_name">
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="new last name"
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
        <p className="mt-2 text-sm font-semibold text-center">
          NOTE: For changes to take effect, you will be logged out and will have
          to login again.
        </p>
      </form>
    </Dialog>
  );
};

export default EditProfile;
