import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ProgressBar } from "primereact/progressbar";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const notifications = useSelector((state) => state.notification);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const toast = useRef(null);

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
    updateNotifications();
  }, [notifications]);

  return (
    <div className="App">
      {/* loader */}
      {isLoading && (
        <ProgressBar
          mode="indeterminate"
          style={{ height: "8px", borderRadius: "0" }}
        ></ProgressBar>
      )}
      {/* loader */}

      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/app/signin" element={<Signin />} />
        <Route path="/app/signup" element={<Signup />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
      </Routes>
      {/* routes */}

      {/* footer */}
      <Footer />
      {/* footer */}

      {/* toast */}
      <Toast ref={toast} />
      {/* toast */}
    </div>
  );
};

export default App;
