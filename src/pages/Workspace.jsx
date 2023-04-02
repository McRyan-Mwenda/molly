import { useRef } from "react";
import { Menu } from "primereact/menu";
import PageTitle from "../assets/title";
import { useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import GetMember from "../components/workspace/GetMembers";

const GET_WORKSPACES = gql`
  query {
    getWorkspace {
      name
      workspace_uid
    }
  }
`;

const Workspace = () => {
  PageTitle("Workspace");

  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_WORKSPACES);

  if (data) {
    dispatch(setIsLoading({ status: false }));
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  const menu = useRef();

  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {},
    },
  ];

  return (
    <div className="page">
      {data && (
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">{data.getWorkspace.name}</h1>
          <div className="flex justify-between items-center">
            <div>
              <button
                onClick={(e) => menu.current.toggle(e)}
                className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
              >
                <i className="bi bi-list"></i> Menu
              </button>
              <Menu model={items} popup ref={menu} />
            </div>
          </div>
        </div>
      )}
      <hr className="my-4" />
      <GetMember />
    </div>
  );
};

export default Workspace;
