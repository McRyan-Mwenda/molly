import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";

import PageTitle from "../title";
import Budgets from "../components/Budgets";
import Accounts from "../components/Accounts";

const Dashboard = () => {
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
      <div className="card">
        <TabView className="page-fonts">
          <TabPanel header="Accounts" leftIcon="pi pi-money-bill mr-2">
            <Accounts />
          </TabPanel>
          <TabPanel header="Budgets" leftIcon="pi pi-briefcase mr-2">
            <Budgets />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Dashboard;
