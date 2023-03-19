import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import Account from "./components/Account";

const App = () => {
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
        <Route path="/app/dashboard/account/:id" element={<Account />} />
      </Routes>
      {/* routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
