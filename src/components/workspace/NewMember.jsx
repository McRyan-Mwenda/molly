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

const CREATE_MEMBER = gql`
  mutation (
    $email: String!
    $phone_number: String!
    $first_name: String!
    $last_name: String
    $password: String!
  ) {
    createTeamMember(
      email: $email
      phone_number: $phone_number
      first_name: $first_name
      last_name: $last_name
      password: $password
    ) {
      id
    }
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

const NewMember = ({ memberAdd, setMemberAdd }) => {
  const dispatch = useDispatch();

  const thisform = useRef(null);

  const [createTeamMember, { data: createBudgetData, loading, error }] =
    useMutation(CREATE_MEMBER, {
      refetchQueries: [{ query: GET_MEMBER }],
    });

  if (createBudgetData) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      createNewNotification({
        type: "success",
        message: "Member created successfully",
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
      header="Add new member"
      visible={memberAdd}
      style={{ width: "50vw" }}
      onHide={() => setMemberAdd(false)}
      className="page-fonts"
    >
      <form
        ref={thisform}
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(removeOldNotification());

          createTeamMember({
            variables: {
              email: e.target.email.value,
              phone_number: e.target.phone_number.value,
              first_name: e.target.first_name.value,
              last_name: e.target.last_name.value,
              password: e.target.password.value,
            },
          });

          thisform.current.reset();
        }}
      >
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="member email"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="member phone number"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="member first name"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="member last name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="************"
            required
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

export default NewMember;
