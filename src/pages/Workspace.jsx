import { Menu } from "primereact/menu";
import PageTitle from "../assets/title";
import { Button } from "primereact/button";
import { useQuery, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { setIsLoading } from "../reducers/loading";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewMember from "../components/workspace/NewMember";
import GetMember from "../components/workspace/GetMembers";
import UpdateWorkspace from "../components/workspace/UpdateWorkspace";

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

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  const dispatch = useDispatch();

  const [memberAdd, setMemberAdd] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);

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
      command: () => setUpdateVisible(true),
    },
  ];

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

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

      {/* add button */}
      <Button
        icon="pi pi-plus"
        label="Add new member"
        severity="primary"
        aria-label="Filter"
        className="hover:shadow-md page-fonts"
        style={{ marginLeft: "1rem", marginBottom: "2rem" }}
        outlined
        onClick={() => setMemberAdd(true)}
      />
      {/* add button */}

      {/* update workspace */}
      <UpdateWorkspace
        updateVisible={updateVisible}
        setUpdateVisible={setUpdateVisible}
      />
      {/* update workspace */}

      {/* Add member */}
      <NewMember memberAdd={memberAdd} setMemberAdd={setMemberAdd} />
      {/* Add member */}
    </div>
  );
};

export default Workspace;
