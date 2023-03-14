import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";

import PageTitle from "../title";
import Profile from "../components/Profile";
import Accounts from "../components/Accounts";
import Budgets from "../components/Budgets";
import Transactions from "../components/Transactions";
import Reports from "../components/Reports";

const Dashboard = ({ setIsLoading }) => {
  PageTitle("Dashboard");

  const navigate = useNavigate();
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
      {/* <h1 className="text-3xl">Dashboard</h1> */}
      <div className="card">
        <TabView className="page-fonts">
          <TabPanel header="Profile" leftIcon="pi pi-user mr-2">
            <Profile setIsLoading={setIsLoading} />
          </TabPanel>
          <TabPanel header="Accounts" leftIcon="pi pi-book mr-2">
            <Accounts setIsLoading={setIsLoading} />
          </TabPanel>
          <TabPanel header="Budgets" leftIcon="pi pi-briefcase mr-2">
            <Budgets setIsLoading={setIsLoading} />
          </TabPanel>
          <TabPanel header="Transactions" leftIcon="pi pi-money-bill mr-2">
            <Transactions setIsLoading={setIsLoading} />
          </TabPanel>
          <TabPanel header="Reports" leftIcon="pi pi-chart-bar mr-2">
            <Reports setIsLoading={setIsLoading} />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Dashboard;
