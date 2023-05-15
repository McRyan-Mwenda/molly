import styles from "./style";
import {
  About,
  Products,
  Clients,
  CTA,
  Footer,
  Navbar,
  Contact,
  Stats,
  Testimonials,
  Hero,
  Resources,
  StarsCanvas,
} from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Products />
          <About />
          <Resources />
          <Testimonials />
          <Clients />
          <CTA />
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
