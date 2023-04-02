import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";

const GET_MEMBER = gql`
  query {
    getTeamMembers {
      id
      user {
        id
        email
        first_name
        last_name
      }
      workspace_uid
      is_employee
      created_at
      updated_at
    }
  }
`;

const GetMember = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_MEMBER);

  if (data) {
    dispatch(setIsLoading({ status: false }));
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  const menu = useRef();

  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {},
    },
  ];

  return (
    <div className="mx-4">
      <h1 className="text-2xl my-4">Team members</h1>
      {data ? (
        data.getTeamMembers.map((member, index) => {
          const list = (
            <>
              <div
                className="border rounded-md shadow hover:shadow-md p-4 bg-gray-50 mb-4"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <p className="text-2xl mb-2">
                    {member.user.first_name} {member.user.last_name}
                  </p>
                  <span className="py-1 px-4 border shadow rounded-xl mb-2 bg-red-200 border-red-300 cursor-pointer">
                    <i class="bi bi-trash-fill text-lg text-red-500"></i>
                  </span>
                </div>
                <hr className="mb-2" />
                <p>
                  <span className="font-semibold">Username:</span>{" "}
                  {member.user.email}
                </p>
              </div>
            </>
          );

          return list;
        })
      ) : (
        <>
          <div className="text-center my-56">
            <span className="loader"></span>
          </div>
        </>
      )}

      {/* add button */}
      <Button
        icon="pi pi-plus"
        label="Add new member"
        severity="primary"
        aria-label="Filter"
        className="hover:shadow-md page-fonts"
        outlined
        onClick={() => setIsVisible(true)}
      />
      {/* add button */}
    </div>
  );
};

export default GetMember;
