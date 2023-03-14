import { useSelector } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";

import PageTitle from "../title";
import Profile from "../components/Profile";
import Accounts from "../components/Accounts";
import Budgets from "../components/Budgets";
import Transactions from "../components/Transactions";
import Reports from "../components/Reports";

const Dashboard = () => {
  PageTitle("Dashboard");

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  useEffect(() => {
    checkAuth();
    setVisible(true);
  }, [isLoggedIn]);

  const footerContent = (
    <div className="page-fonts">
      <Button
        label="Okay"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="page">
      <div className="card">
        <TabView className="page-fonts">
          <TabPanel header="Profile" leftIcon="pi pi-user mr-2">
            <Profile />
          </TabPanel>
          <TabPanel header="Accounts" leftIcon="pi pi-book mr-2">
            <Accounts />
          </TabPanel>
          <TabPanel header="Budgets" leftIcon="pi pi-briefcase mr-2">
            <Budgets />
          </TabPanel>
          <TabPanel header="Transactions" leftIcon="pi pi-money-bill mr-2">
            <Transactions />
          </TabPanel>
          <TabPanel header="Reports" leftIcon="pi pi-chart-bar mr-2">
            <Reports />
          </TabPanel>
        </TabView>
      </div>

      {/* info */}
      <Dialog
        header="Quick reminder"
        visible={visible}
        position="bottom-right"
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
        draggable={false}
        resizable={false}
        className="page-fonts"
      >
        <p className="m-0">
          Right click on anywhere on the page to open the context menu, which
          has further actions.
        </p>
      </Dialog>
      {/* info */}
    </div>
  );
};

export default Dashboard;
