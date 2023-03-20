import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";

const GET_ALL_ACCOUNTS = gql`
  query {
    getAllAccounts {
      id
      account_name
      account_type
    }
  }
`;

const Accounts = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_ALL_ACCOUNTS);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data.getAllAccounts);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <div>
      {data ? (
        data.getAllAccounts.map((account, index) => {
          const list = (
            <>
              <Link to={`/app/dashboard/account/${account.id}`} key={index}>
                <div className="border rounded-md hover:shadow-md p-4 bg-gray-50 mb-4 text-lg">
                  <p className="text-2xl mb-2">{account.account_name}</p>
                  <hr className="mb-2" />
                  <p>
                    <span className="font-semibold">Account type:</span>{" "}
                    {account.account_type}
                  </p>
                </div>
              </Link>
            </>
          );

          return list;
        })
      ) : (
        <>
          <div className="text-center my-40">
            <span className="loader"></span>
          </div>
        </>
      )}
      {data && (
        <>
          {!data.getAllAccounts && (
            <div className="text-center my-40">
              <h1 className="text-3xl">
                Hmm... It seems you do not have any accounts 🤔
              </h1>
              <p className="text-xl">
                Right click anywhere on the screen to open the menu and add your
                accounts.
              </p>
            </div>
          )}
        </>
      )}

      {/* add button */}
      <Button
        icon="pi pi-plus"
        label="Add new account"
        security="primary"
        aria-label="Filter"
        className="hover:shadow-md float-right"
        outlined
      />
      {/* add button */}
    </div>
  );
};

export default Accounts;
