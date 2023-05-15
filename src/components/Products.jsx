import { products } from "../constants";
import styles, { layout } from "../style";
import Button from "./Book_Button";
import { SectionWrapper } from "../hoc";

const ProductCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== products.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Products = () => (
  <section id="products" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        your statements.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the click of a button, you can keep track of your finances and your
        business expenditure, keeping track of your debts, budgets and so much
        more. Check out some of the <strong>products</strong> and{" "}
        <strong>solutions</strong> we offer at <strong>Finance Fluent.</strong>{" "}
        Click on the button below and book a demo with our support team.
        
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} {...product} index={index} />
      ))}
    </div>
  </section>
);

export default SectionWrapper(Products, "products");
