import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { setNotification } from "../reducers/notifications";
import moment from "moment";

const GET_PROFILE = gql`
  query {
    getProfile {
      public_id
      tier
      account_limit
      pdf_gen
      ai_predictions
      created_at
      user {
        public_id
        email
        username
        first_name
        last_name
      }
    }
  }
`;

const Profile = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PROFILE);

  if (data) {
    dispatch(
      setIsLoading({
        status: false,
      })
    );
    console.log(data.getProfile);
  }

  if (loading) {
    dispatch(
      setIsLoading({
        status: true,
      })
    );
  }

  if (error) {
    dispatch(
      setIsLoading({
        status: false,
      })
    );
    dispatch(
      setNotification({
        type: "error",
        message: `${error.message}`,
      })
    );
  }

  return (
    <div>
      <h1 className="text-3xl">Profile panel</h1>
      <br />
      {data ? (
        <>
          <div className="border rounded-md shadow-md p-4 bg-gray-50">
            <p className="text-xl mb-2">User & profile information</p>
            <hr className="mb-2" />
            <p>
              <span className="font-semibold">User public ID:</span>{" "}
              {data.getProfile.user.public_id}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {data.getProfile.user.email}
            </p>
            <p>
              <span className="font-semibold">Username:</span>{" "}
              {data.getProfile.user.username}
            </p>
            <p>
              <span className="font-semibold">First name:</span>{" "}
              {data.getProfile.user.first_name}
            </p>
            <p>
              <span className="font-semibold">Last name:</span>{" "}
              {data.getProfile.user.last_name}
            </p>
            <br />
            <p>
              <span className="font-semibold">Profile public ID:</span>{" "}
              {data.getProfile.public_id}
            </p>
            <p>
              <span className="font-semibold">Profile package tier:</span>{" "}
              {data.getProfile.tier}
            </p>
            <p>
              <span className="font-semibold">
                Max accounts attached to profile:
              </span>{" "}
              {data.getProfile.account_limit}
            </p>
            <p>
              <span className="font-semibold">Can generate pdf reports:</span>{" "}
              {data.getProfile.pdf_get ? <>True</> : <>False</>}
            </p>
            <p>
              <span className="font-semibold">Can access AI predictions:</span>{" "}
              {data.getProfile.ai_predictions ? <>True</> : <>False</>}
            </p>
            <p>
              <span className="font-semibold">Created on:</span>{" "}
              {moment
                .unix(data.getProfile.created_at)
                .format("YYYY-MM-DD HH:mm:ss")}
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Profile;
