import { Menu } from "primereact/menu";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Column } from "primereact/column";
import { useQuery, gql } from "@apollo/client";
import { DataTable } from "primereact/datatable";
import { setIsLoading } from "../reducers/loading";
import { InputSwitch } from "primereact/inputswitch";
import NewTransaction from "./dialogs/NewTransaction";
import EditTransaction from "./dialogs/EditTransaction";
import DeleteTransaction from "./dialogs/DeleteTransaction";

const GET_TRANSACTION = gql`
  query ($id: ID!) {
    getTransactionsByAccount(id: $id) {
      id
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
  const menu = useRef(null);

  const [isNew, setIsNew] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const [rowClick, setRowClick] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });

  let myData;

  if (data) {
    dispatch(setIsLoading({ status: false }));
    myData = data.getTransactionsByAccount.map((transaction) => ({
      id: transaction.id,
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
            <h1 className="text-2xl font-light flex justify-between items-center">
              <span>Transaction history</span>{" "}
              <span className="text-sm text-zinc-500 font-semibold underline ml-8">
                <span className="text-zinc-600">NOTE:</span> Select a row to be
                able to <span className="text-blue-500">update</span> or{" "}
                <span className="text-red-500">delete</span>!
              </span>
            </h1>
            <div className="flex justify-between items-center">
              <div className="mr-4">
                <button
                  onClick={(e) => menu.current.toggle(e)}
                  className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
                >
                  <i className="bi bi-list"></i> Menu
                </button>
                <Menu model={items} popup ref={menu} />
              </div>
              <InputSwitch
                inputId="input-rowclick"
                className="mr-2"
                checked={rowClick}
                onChange={(e) => setRowClick(e.value)}
              />
              <label htmlFor="input-rowclick">Row Click</label>
            </div>
          </div>
          <DataTable
            value={myData}
            tableStyle={{ minWidth: "50rem" }}
            className="page-fonts"
            selectionMode={rowClick ? null : "radiobutton"}
            selection={selectedProduct}
            onSelectionChange={(e) => setSelectedProduct(e.value)}
            dataKey="id"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
          >
            <Column
              selectionMode="single"
              headerStyle={{ width: "3rem" }}
            ></Column>
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
            <Column
              sortable
              field="description"
              header="Transaction Description"
            ></Column>
            <Column sortable field="updated_at" header="Last Updated"></Column>
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
      <EditTransaction
        account_id={id}
        currency={currency}
        selectedProduct={selectedProduct}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      {/* edit transaction */}

      {/* delete transaction */}
      <DeleteTransaction
        account_id={id}
        selectedProduct={selectedProduct}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />
      {/* delete transaction */}
    </div>
  );
};

export default Transactions;
