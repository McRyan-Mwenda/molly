import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Column } from "primereact/column";
import { useQuery, gql } from "@apollo/client";
import { DataTable } from "primereact/datatable";
import { setIsLoading } from "../reducers/loading";
import NewTransaction from "./dialogs/NewTransaction";

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

const Transactions = ({ id, currency }) => {
  const toast = useRef(null);
  const menu = useRef(null);

  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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

  const items = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => setIsNew(true),
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => setIsUpdate(true),
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => setIsDelete(true),
    },
  ];

  return (
    <div>
      {data ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-light">Account transaction history</h1>
            <div>
              <button
                onClick={(e) => menu.current.toggle(e)}
                className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
              >
                <i class="bi bi-list"></i> Menu
              </button>
              <Menu model={items} popup ref={menu} />
            </div>
          </div>
          {/* <hr className="my-4" /> */}
          <DataTable
            value={myData}
            tableStyle={{ minWidth: "50rem" }}
            className="page-fonts"
          >
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

      {/* new transaction */}
      <NewTransaction
        id={id}
        currency={currency}
        isNew={isNew}
        setIsNew={setIsNew}
      />
      {/* new transaction */}

      {/* edit transaction */}
      {/* edit transaction */}

      {/* delete transaction */}
      {/* delete transaction */}

      {/* notification */}
      <Toast ref={toast} />
      {/* notification */}
    </div>
  );
};

export default Transactions;
