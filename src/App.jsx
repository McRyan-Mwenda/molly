import { useEffect } from "react";
import { toaster } from "evergreen-ui";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

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

  const updateNotifications = () => {
    if (notifications.message === "" && notifications.type === "") {
      // do nothing
    } else {
      if (notifications.type === "notify") {
        toaster.notify(notifications.message, { duration: 5 });
      } else if (notifications.type === "success") {
        toaster.success(notifications.message, { duration: 5 });
      } else if (notifications.type === "error") {
        toaster.danger(notifications.message, { duration: 5 });
      }
    }
  };

  useEffect(() => {
    updateNotifications();
  }, [notifications]);

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
      </Routes>
      {/* routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
