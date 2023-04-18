import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { useDispatch } from "react-redux";

const GET_PROFILE = gql`
  query {
    getProfile {
      user {
        email
        first_name
        last_name
      }
    }
  }
`;

const BillingInfo = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PROFILE);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data.getProfile);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <div>
      {data && (
        <>
          <div className="mb-2">
            <label htmlFor="cardholder_name" id="cardholder_name">
              Email
            </label>
            <input
              type="email"
              name="cardholder_name"
              id="cardholder_name"
              value={data.getProfile.user.email}
              readOnly
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="card_number" id="card_number">
              First name
            </label>
            <input
              type="text"
              name="card_number"
              id="card_number"
              value={data.getProfile.user.first_name}
              readOnly
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="expiration_year" id="expiration_year">
              Last name
            </label>
            <input
              type="text"
              name="expiration_year"
              id="expiration_year"
              value={data.getProfile.user.last_name}
              readOnly
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BillingInfo;
