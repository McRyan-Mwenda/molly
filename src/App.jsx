import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/Navbar";

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
      </Routes>
      {/* routes */}

      {/* footer */}
      <Footer />
      {/* footer */}
    </div>
  );
};

export default App;
