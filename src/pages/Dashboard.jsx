import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";

import PageTitle from "../title";
import Budgets from "../components/Budgets";
import Accounts from "../components/Accounts";

const Dashboard = () => {
  PageTitle("Dashboard");

  const navigate = useNavigate();

  const notifications = useSelector((state) => state.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const toast = useRef(null);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  const showSuccess = () => {
    toast.current.show({
      severity: notifications.type,
      summary: "Success",
      detail: notifications.message,
      life: 3000,
    });
  };

  const showInfo = () => {
    toast.current.show({
      severity: notifications.type,
      summary: "Info",
      detail: notifications.message,
      life: 3000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: notifications.type,
      summary: "Error",
      detail: notifications.message,
      life: 3000,
    });
  };

  const updateNotifications = () => {
    if (notifications.type === "" && notifications.message === "") {
      // do nothing
    } else if (notifications.type === "success") {
      showSuccess();
    } else if (notifications.type === "info") {
      showInfo();
    } else if (notifications.type === "error") {
      showError();
    }
  };

  useEffect(() => {
    checkAuth();
    updateNotifications();
  }, [isLoggedIn, notifications]);

  return (
    <div className="page">
      <div className="card">
        <TabView className="page-fonts">
          <TabPanel header="Transactions" leftIcon="pi pi-money-bill mr-2">
            <Accounts />
          </TabPanel>
          <TabPanel header="Budgets" leftIcon="pi pi-briefcase mr-2">
            <Budgets />
          </TabPanel>
        </TabView>
      </div>

      {/* toast */}
      <Toast ref={toast} />
      {/* toast */}
    </div>
  );
};

export default Dashboard;
