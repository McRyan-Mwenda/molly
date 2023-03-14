import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { setNotification } from "../reducers/notifications";
import { Inplace, InplaceDisplay, InplaceContent } from "primereact/inplace";
import Table from "./transactions/Table";

const GET_ALL_ACCOUNTS = gql`
  query {
    getAllAccounts {
      id
      account_name
    }
  }
`;

const Transactions = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_ALL_ACCOUNTS);

  if (data) {
    dispatch(
      setIsLoading({
        status: false,
      })
    );
    console.log(data.getAllAccounts);
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
      <h1 className="text-3xl">Transactions panel</h1>
      <br />
      {data ? (
        data.getAllAccounts.map((account, index) => {
          const list = (
            <>
              <Inplace key={index} className="page-fonts mb-8">
                <InplaceDisplay>{index +1}. {account.account_name}</InplaceDisplay>
                <InplaceContent>
                  <Table id={account.id} />
                </InplaceContent>
              </Inplace>
            </>
          );

          return list;
        })
      ) : (
        <>
          <div className="text-center">
            <h1 className="text-3xl">Hmm... You shouldn't be seeing this 🤔</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Transactions;
