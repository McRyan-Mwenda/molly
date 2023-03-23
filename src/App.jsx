import { Toast } from "primereact/toast";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Budget from "./components/Budget";
import Dashboard from "./pages/Dashboard";
import Account from "./components/Account";
import Profile from "./components/Profile";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

const App = () => {
  const toast = useRef(null);

  const notification = useSelector(
    (state) => state.notification,
    (prev, next) => prev.type === next.type && prev.message === next.message
  );

  const showSuccess = (notification) => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: notification.message,
      life: 3000,
    });
  };

  const showInfo = (notification) => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: notification.message,
      life: 3000,
    });
  };

  const showWarn = (notification) => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: notification.message,
      life: 3000,
    });
  };

  const showError = (notification) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: notification.message,
      life: 3000,
    });
  };

  const handleNotification = (notification) => {
    if (notification.message === null && notification.type === null) {
      // do nothing
    } else if (notification.type === "success") {
      showSuccess(notification);
    } else if (notification.type === "info") {
      showInfo(notification);
    } else if (notification.type === "warning") {
      showWarn(notification);
    } else if (notification.type === "error") {
      showError(notification);
    }
  };

  useEffect(() => {
    handleNotification(notification);
  }, [notification]);

  return (
    <div className="App">
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
        <Route path="/app/dashboard/profile" element={<Profile />} />
        <Route path="/app/dashboard/budget/:id" element={<Budget />} />
        <Route path="/app/dashboard/account/:id" element={<Account />} />
      </Routes>
      {/* routes */}

      {/* footer */}
      <Footer />
      {/* footer */}

      {/* notification */}
      <Toast position="bottom-right" ref={toast} />
      {/* notification */}
    </div>
  );
};

export default App;
