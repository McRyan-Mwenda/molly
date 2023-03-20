import moment from "moment";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import Transactions from "./Transactions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";

const GET_ACCOUNT = gql`
  query ($id: ID!) {
    getAccount(id: $id) {
      id
      account_name
      account_type
      account_balance
      created_at
      updated_at
    }
  }
`;

const Account = () => {
  const { id } = useParams();

  const toast = useRef(null);

  const dispatch = useDispatch();

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: `${error.message}`,
      life: 3000,
    });
  };

  const { loading, error, data } = useQuery(GET_ACCOUNT, {
    variables: { id: id },
  });

  if (data) {
    dispatch(setIsLoading({ status: false }));
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    showError(error);
  }

  return (
    <div className="page">
      {data ? (
        <>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl">{data.getAccount.account_name}</h1>
            <button
              className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
              onClick={() => {
                window.history.back();
              }}
            >
              <i className="bi bi-arrow-left-short"></i> Back
            </button>
          </div>
          <div>
            <hr className="my-4" />
            <p className="text-lg">
              <span className="font-semibold">Account type:</span>{" "}
              {data.getAccount.account_type}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account balance:</span>{" "}
              {data.getAccount.account_balance.toLocaleString()}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Created on:</span>{" "}
              {moment.unix(data.getAccount.created_at).format("YYYY-MM-DD")}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Updated on:</span>{" "}
              {moment.unix(data.getAccount.updated_at).format("YYYY-MM-DD")}
            </p>
          </div>
          <hr className="my-4" />
          <h1 className="text-2xl mb-4 font-light">Account transaction history</h1>
          <Transactions id={data.getAccount.id} />
        </>
      ) : (
        <>
          <div className="text-center my-56">
            <span className="loader"></span>
          </div>
        </>
      )}

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </div>
  );
};

export default Account;
