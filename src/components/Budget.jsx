import moment from "moment";
import { Menu } from "primereact/menu";
import PageTitle from "../assets/title";
import Reports2 from "./reports/Reports2";
import EditBudget from "./budgets/EditBudget";
import { useQuery, gql } from "@apollo/client";
import DeleteBudget from "./budgets/DeleteBudget";
import UpdateStatus from "./budgets/UpdateStatus";
import { setIsLoading } from "../reducers/loading";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const GET_BUDGET = gql`
  query ($id: ID!) {
    getBudget(id: $id) {
      id
      budget_name
      budget_description
      budget_is_active
      budget_amount
      category {
        category_name
      }
      account {
        id
        account_name
        account_type
        account_balance
      }
      created_at
      updated_at
    }
  }
`;

const Budget = () => {
  const { id } = useParams();

  PageTitle(`Budget: ${id}`);

  const navigate = useNavigate();

  const menu = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  const { loading, error, data } = useQuery(GET_BUDGET, {
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
  }

  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => setIsVisible(true),
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => setIsDelete(true),
    },
  ];

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      {data ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex">
              <h1 className="text-3xl">{data.getBudget.budget_name}</h1>
              {data.getBudget.budget_is_active ? (
                <>
                  <p
                    className="px-4 py-1 rounded-md border font-semibold text-white ml-4"
                    style={{ backgroundColor: "#6ee7b7" }}
                  >
                    active
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="px-4 py-1 rounded-md border font-semibold text-white ml-4"
                    style={{ backgroundColor: "#fca5a5" }}
                  >
                    inactive
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div>
                <button
                  onClick={(e) => menu.current.toggle(e)}
                  className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow mr-4"
                >
                  <i className="bi bi-list"></i> Menu
                </button>
                <Menu model={items} popup ref={menu} />
              </div>
              <button
                className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
                onClick={() => {
                  window.history.back();
                }}
              >
                <i className="bi bi-arrow-left-short"></i> Back
              </button>
            </div>
          </div>
          <div>
            <hr className="my-4" />
            <p className="text-lg">
              <span className="font-semibold">Connected account:</span>{" "}
              {data.getBudget.account.account_name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account type:</span>{" "}
              {data.getBudget.account.account_type}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account balance:</span>{" "}
              {data.getBudget.account.account_balance.toLocaleString()}
            </p>
            <hr className="my-4" />
            <p className="text-lg">
              <span className="font-semibold">Budget amount:</span>{" "}
              {data.getBudget.budget_amount.toLocaleString()}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Budget category:</span>{" "}
              {data.getBudget.category.category_name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Created on:</span>{" "}
              {moment.unix(data.getBudget.created_at).format("YYYY-MM-DD")}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Updated on:</span>{" "}
              {moment.unix(data.getBudget.updated_at).format("YYYY-MM-DD")}
            </p>
          </div>
          <hr className="my-4" />
          <p className="text-lg flex flex-col">
            <span className="font-semibold">Budget description:</span>
            <span className="mt-2 w-6/12">
              {data.getBudget.budget_description}
            </span>
          </p>
          <hr className="my-4" />
          <div className="text-lg flex flex-col">
            <p className="font-semibold">Change budget status:</p>
            <UpdateStatus
              id={data.getBudget.id}
              currentStatus={data.getBudget.budget_is_active}
            />
          </div>
          <hr className="my-4" />

          {/* budget reports */}
          {data.getBudget.budget_is_active && (
            <Reports2 budget_data={data.getBudget} />
          )}
          {/* budget reports */}
        </>
      ) : (
        <>
          <div className="text-center my-56">
            <span className="loader"></span>
          </div>
        </>
      )}

      {/* update budget */}
      {data && (
        <EditBudget
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          id={data.getBudget.id}
        />
      )}
      {/* update budget */}

      {/* delete budget */}
      {data && (
        <DeleteBudget
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          id={data.getBudget.id}
        />
      )}
      {/* delete budget */}
    </div>
  );
};

export default Budget;
