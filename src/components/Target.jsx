import moment from "moment";
import { Menu } from "primereact/menu";
import PageTitle from "../assets/title";
import Reports3 from "./reports/Reports3";
import EditTarget from "./targets/EditTarget";
import { useQuery, gql } from "@apollo/client";
import DeleteTarget from "./targets/DeleteTarget";
import UpdateTarget from "./targets/UpdateTarget";
import { setIsLoading } from "../reducers/loading";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const GET_TARGET = gql`
  query ($id: ID!) {
    getTarget(id: $id) {
      id
      target_name
      target_description
      target_is_active
      target_amount
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

const Target = () => {
  const { id } = useParams();

  PageTitle(`Target: ${id}`);

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

  const { loading, error, data } = useQuery(GET_TARGET, {
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
              <h1 className="text-3xl">{data.getTarget.target_name}</h1>
              {data.getTarget.target_is_active ? (
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
              {data.getTarget.account.account_name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account type:</span>{" "}
              {data.getTarget.account.account_type}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Account balance:</span>{" "}
              {data.getTarget.account.account_balance.toLocaleString()}
            </p>
            <hr className="my-4" />
            <p className="text-lg">
              <span className="font-semibold">Target amount:</span>{" "}
              {data.getTarget.target_amount.toLocaleString()}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Target category:</span>{" "}
              {data.getTarget.category.category_name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Created on:</span>{" "}
              {moment.unix(data.getTarget.created_at).format("YYYY-MM-DD")}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Updated on:</span>{" "}
              {moment.unix(data.getTarget.updated_at).format("YYYY-MM-DD")}
            </p>
          </div>
          <hr className="my-4" />
          <p className="text-lg flex flex-col">
            <span className="font-semibold">Target description:</span>
            <span className="mt-2 w-6/12">
              {data.getTarget.target_description}
            </span>
          </p>
          <hr className="my-4" />
          <div className="text-lg flex flex-col">
            <p className="font-semibold">Change target status:</p>
            <UpdateTarget
              id={data.getTarget.id}
              currentStatus={data.getTarget.target_is_active}
            />
          </div>
          <hr className="my-4" />

          {/* budget reports */}
          {data.getTarget.target_is_active && (
            <Reports3 target_data={data.getTarget} />
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
        <EditTarget
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          id={data.getTarget.id}
        />
      )}
      {/* update budget */}

      {/* delete budget */}
      {data && (
        <DeleteTarget
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          id={data.getTarget.id}
        />
      )}
      {/* delete budget */}
    </div>
  );
};

export default Target;
