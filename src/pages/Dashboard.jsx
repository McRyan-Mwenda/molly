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
import Menu from "../components/menu/Menu";
import NewAccount from "../components/dialogs/NewAccount";
import NewBudget from "../components/dialogs/NewBudget";
import NewTransaction from "../components/dialogs/NewTransaction";
import EditAccount from "../components/dialogs/EditAccount";
import EditBudget from "../components/dialogs/EditBudget";
import EditProfile from "../components/dialogs/EditProfile";
import EditTransaction from "../components/dialogs/EditTransaction";
import DeleteAccount from "../components/dialogs/DeleteAccount";
import DeleteBudget from "../components/dialogs/DeleteBudget";
import DeleteTransaction from "../components/dialogs/DeleteTransaction";

const Dashboard = () => {
  PageTitle("Dashboard");

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [naVisible, naSetVisible] = useState(false);
  const [nbVisible, nbSetVisible] = useState(false);
  const [ntVisible, ntSetVisible] = useState(false);
  const [eaVisible, eaSetVisible] = useState(false);
  const [ebVisible, ebSetVisible] = useState(false);
  const [epVisible, epSetVisible] = useState(false);
  const [etVisible, etSetVisible] = useState(false);
  const [daVisible, daSetVisible] = useState(false);
  const [dbVisible, dbSetVisible] = useState(false);
  const [dtVisible, dtSetVisible] = useState(false);

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
        // position="bottom-right"
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
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

      {/* context menu */}
      <Menu
        naSetVisible={naSetVisible}
        eaSetVisible={eaSetVisible}
        daSetVisible={daSetVisible}
        nbSetVisible={nbSetVisible}
        ebSetVisible={ebSetVisible}
        dbSetVisible={dbSetVisible}
        ntSetVisible={ntSetVisible}
        etSetVisible={etSetVisible}
        dtSetVisible={dtSetVisible}
        epSetVisible={epSetVisible}
      />
      {/* context menu */}

      {/* dialogs */}
      <NewAccount naVisible={naVisible} naSetVisible={naSetVisible} />
      <NewBudget nbVisible={nbVisible} nbSetVisible={nbSetVisible} />
      <NewTransaction ntVisible={ntVisible} ntSetVisible={ntSetVisible} />

      <EditAccount eaVisible={eaVisible} eaSetVisible={eaSetVisible} />
      <EditBudget ebVisible={ebVisible} ebSetVisible={ebSetVisible} />
      <EditProfile epVisible={epVisible} epSetVisible={epSetVisible} />
      <EditTransaction etVisible={etVisible} etSetVisible={etSetVisible} />

      <DeleteAccount daVisible={daVisible} daSetVisible={daSetVisible} />
      <DeleteBudget dbVisible={dbVisible} dbSetVisible={dbSetVisible} />
      <DeleteTransaction dtVisible={dtVisible} dtSetVisible={dtSetVisible} />
      {/* dialogs */}
    </div>
  );
};

export default Dashboard;
