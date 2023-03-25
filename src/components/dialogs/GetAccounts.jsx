import { useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { createNewNotification } from "../../reducers/notifications";
import { useEffect } from "react";

const GET_ALL_ACCOUNTS = gql`
  query {
    getAllAccounts {
      id
      account_name
      account_type
    }
  }
`;

const GetAccounts = ({ setAccountData }) => {
  const dispatch = useDispatch();

  const { loading, error, data: getAccountsData } = useQuery(GET_ALL_ACCOUNTS);

  if (getAccountsData) {
    dispatch(setIsLoading({ status: false }));
    console.log(getAccountsData);
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

  useEffect(() => {
    getAccountsData && setAccountData(getAccountsData);
  }, [getAccountsData]);

  return null;
};

export default GetAccounts;
