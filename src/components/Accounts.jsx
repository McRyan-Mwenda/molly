import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import NewAccount from "./dialogs/NewAccount";
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

  const [isVisible, setIsVisible] = useState(false);

  const { loading, error, data: accountsData } = useQuery(GET_ALL_ACCOUNTS);

  if (accountsData) {
    dispatch(setIsLoading({ status: false }));
    // console.log(accountsData.getAllAccounts);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <div>
      {accountsData ? (
        accountsData.getAllAccounts.map((account, index) => {
          const list = (
            <>
              <Link to={`/app/dashboard/account/${account.id}`} key={index}>
                <div className="border rounded-md shadow hover:shadow-md p-4 bg-gray-50 mb-4 text-lg">
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
      {accountsData && (
        <>
          {!accountsData.getAllAccounts && (
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
        severity="primary"
        aria-label="Filter"
        className="hover:shadow-md page-fonts"
        outlined
        onClick={() => setIsVisible(true)}
      />
      {/* add button */}

      {/* add account */}
      <NewAccount isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* add account */}
    </div>
  );
};

export default Accounts;
