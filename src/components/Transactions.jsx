import { useRef } from "react";
import PageTitle from "../title";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { Column } from "primereact/column";
import { useQuery, gql } from "@apollo/client";
import { DataTable } from "primereact/datatable";
import { setIsLoading } from "../reducers/loading";

const GET_TRANSACTION = gql`
  query ($id: ID!) {
    getTransactionsByAccount(id: $id) {
      transaction_type
      transaction_amount
      currency_code
      transaction_date
      description
      created_at
      updated_at
      category {
        category_name
        category_description
      }
    }
  }
`;

const Transactions = ({ id }) => {
  PageTitle(`Account: ${id}`);

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

  const { loading, error, data } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });

  let myData;

  if (data) {
    dispatch(setIsLoading({ status: false }));
    myData = data.getTransactionsByAccount.map((transaction) => ({
      transaction_type: transaction.transaction_type,
      transaction_amount: transaction.transaction_amount,
      currency_code: transaction.currency_code,
      transaction_date: transaction.transaction_date,
      description: transaction.description,
      created_at: transaction.created_at,
      updated_at: transaction.updated_at,
      category_name: transaction.category.category_name,
    }));
    // console.log(data);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    showError(error);
  }

  return (
    <div>
      {data ? (
        <>
          <DataTable value={myData} tableStyle={{ minWidth: "50rem" }}>
            <Column
              sortable
              field="transaction_type"
              header="Transaction Type"
            ></Column>
            <Column
              sortable
              field="transaction_amount"
              header="Transaction Amount"
            ></Column>
            <Column
              sortable
              field="transaction_date"
              header="Transaction Date"
            ></Column>
            <Column
              sortable
              field="currency_code"
              header="Currency Code"
            ></Column>
            <Column
              sortable
              field="category_name"
              header="Transaction Category"
            ></Column>
            <Column sortable field="description" header="Description"></Column>
            <Column sortable field="updated_at" header="Updated on"></Column>
          </DataTable>
        </>
      ) : (
        <>
          <div className="text-center my-24">
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

export default Transactions;
