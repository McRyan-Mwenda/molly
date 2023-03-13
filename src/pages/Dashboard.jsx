import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Pane,
  Tab,
  Tablist,
  Paragraph,
  SideSheet,
  Heading,
} from "evergreen-ui";

import PageTitle from "../title";
import TabController from "../components/dashboard/TabController";

const Dashboard = ({ setIsLoading }) => {
  PageTitle("Dashboard");

  const navigate = useNavigate();
  const [tabs] = useState([
    "Profile  🤖",
    "Accounts  💰",
    "Transactions  💸",
    "Budgets  🏖️",
    "Reports  📊",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      <div className="flex">
        <Tablist className="flex flex-col items-center mr-4">
          {tabs.map((tab, index) => {
            const list = (
              <Tab
                aria-controls={`panel-${tab}`}
                isSelected={index === selectedIndex}
                key={tab}
                onSelect={() => setSelectedIndex(index)}
                className="mb-4 text-center w-full mx-2 font-semibold"
              >
                {tab}
              </Tab>
            );

            return list;
          })}
        </Tablist>
        <div className="w-full px-4">
          {tabs.map((tab, index) => {
            const list = (
              <Pane
                aria-labelledby={tab}
                aria-hidden={index !== selectedIndex}
                display={index === selectedIndex ? "block" : "none"}
                key={tab}
                role="tabpanel"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">My {tab}</span>
                  <span
                    className="hover:cursor-pointer"
                    onClick={() => setIsShown(true)}
                  >
                    <i className="bi bi-list text-2xl font-semibold"></i>
                  </span>
                </div>
                <hr />
                <TabController
                  selectedIndex={selectedIndex}
                  setIsLoading={setIsLoading}
                />
              </Pane>
            );

            return list;
          })}
        </div>
      </div>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>Actions</Heading>
            <Paragraph size={400} color="muted">
              More actions available here
            </Paragraph>
          </Pane>
        </Pane>
        <div className="flex flex-col items-center p-4">
          <div className="border rounded-md shadow bg-slate-50 m-4 p-4 w-full">
            <h1 className="text-center mb-4">Profile actions</h1>
            <hr className="mb-4" />
            <div className="flex flex-col">
              <button className="border rounded-md shadow bg-blue-500 hover:bg-blue-600 px-4 py-2 my-2 w-full text-white">
                Update my profile
              </button>
            </div>
          </div>
          <div className="border rounded-md shadow bg-slate-50 m-4 p-4 w-full">
            <h1 className="text-center mb-4">Account actions</h1>
            <hr className="mb-4" />
            <div className="flex flex-col">
              <button className="border rounded-md shadow bg-emerald-500 hover:bg-emerald-600 px-4 py-2 my-2 w-full text-white">
                Add an account
              </button>
              <button className="border rounded-md shadow bg-blue-500 hover:bg-blue-600 px-4 py-2 my-2 w-full text-white">
                Update an account
              </button>
              <button className="border rounded-md shadow bg-red-500 hover:bg-red-600 px-4 py-2 my-2 w-full text-white">
                Delete an account
              </button>
            </div>
          </div>
          <div className="border rounded-md shadow bg-slate-50 m-4 p-4 w-full">
            <h1 className="text-center mb-4">Budget actions</h1>
            <hr className="mb-4" />
            <div className="flex flex-col">
              <button className="border rounded-md shadow bg-emerald-500 hover:bg-emerald-600 px-4 py-2 my-2 w-full text-white">
                Add a budget
              </button>
              <button className="border rounded-md shadow bg-blue-500 hover:bg-blue-600 px-4 py-2 my-2 w-full text-white">
                Update a budget
              </button>
              <button className="border rounded-md shadow bg-red-500 hover:bg-red-600 px-4 py-2 my-2 w-full text-white">
                Delete a budget
              </button>
            </div>
          </div>
          <div className="border rounded-md shadow bg-slate-50 m-4 p-4 w-full">
            <h1 className="text-center mb-4">Transaction actions</h1>
            <hr className="mb-4" />
            <div className="flex flex-col">
              <button className="border rounded-md shadow bg-emerald-500 hover:bg-emerald-600 px-4 py-2 my-2 w-full text-white">
                Add a transaction
              </button>
              <button className="border rounded-md shadow bg-blue-500 hover:bg-blue-600 px-4 py-2 my-2 w-full text-white">
                Update a transaction
              </button>
              <button className="border rounded-md shadow bg-red-500 hover:bg-red-600 px-4 py-2 my-2 w-full text-white">
                Delete a transaction
              </button>
            </div>
          </div>
          <div className="border rounded-md shadow bg-slate-50 m-4 p-4 w-full">
            <h1 className="text-center mb-4">Report actions</h1>
            <hr className="mb-4" />
            <div className="flex flex-col">
              <button className="border rounded-md shadow bg-zinc-500 hover:bg-zinc-600 px-4 py-2 my-2 w-full text-white">
                Generate pdf report
              </button>
            </div>
          </div>
        </div>
      </SideSheet>
    </div>
  );
};

export default Dashboard;
