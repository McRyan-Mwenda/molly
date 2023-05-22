import React, { useRef } from "react";
import { apple, about, google, what } from "../assets";
import styles, { layout } from "../style";
import { SectionWrapper } from "../hoc";

const About = () => {
  const appleStoreUrl = "https://www.apple.com/app-store/";
  const googlePlayUrl = "https://play.google.com/store";

  const appleRef = useRef(null);
  const googleRef = useRef(null);

  const handleAppleClick = () => {
    appleRef.current.click();
  };

  const handleGoogleClick = () => {
    googleRef.current.click();
  };

  return (

  <div>
    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-5">
      <img src={what} alt="discount" className="w-[32px] h-[32px]" />
      <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">Learn</span> more about{" "}
        <span className="text-white">Us</span> here.
      </p>
    </div>
    <section id="about" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        {/* the image */}
        <img
          src={about}
          alt="about"
          className="w-[80%] h-[60%] relative z-[5]"
        />

        {/* gradient color behind the image */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      {/* the text beside the image */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          About Us and <br className="hidden sm:block" />
          what do we offer
        </h2>
        <p className={`${styles.paragraph} max-w-[700px] mt-5 text-justify`}>
          Welcome to our digital bank! We are a modern banking institution that
          is designed to meet all your financial needs, whether you are an
          individual or a business owner. Our mission is to provide you with a
          seamless banking experience that is fast, secure, and convenient.
          <br />
          <br />
          We believe that banking should be accessible to everyone, regardless
          of where they are in the world. That is why we have built a digital
          platform that allows you to access your accounts and perform
          transactions from anywhere at any time. You no longer have to visit a
          physical bank branch or wait in long queues to carry out your banking
          needs. With our digital bank, you can manage your finances on the go.
          <br />
          <br />
          At our digital bank, we prioritize the security of your personal and
          financial information. Our platform is built with the latest security
          protocols to ensure that your data is safe and secure. We also employ
          a team of security experts who monitor our systems 24/7 to detect and
          prevent any unauthorized access.
          <br />
          <br />
          We understand that each customer has unique financial needs, and we
          have a range of products and services to cater to your specific
          requirements. Whether you need a personal loan, a business loan, a
          savings account, or a credit card, we have got you covered. We also
          offer a range of investment and insurance products to help you grow
          your wealth and protect your assets.
          <br />
          <br />
          Our team of experienced bankers is dedicated to providing you with the
          best possible banking experience. Whether you have a question about
          your account or need help with a transaction, our customer support
          team is always ready to assist you. You can reach out to us via phone,
          email, or live chat, and we will be happy to help.
          <br />
          <br />
          Thank you for choosing our digital bank as your financial partner. We
          look forward to serving you and helping you achieve your financial
          goals.
        </p>

        {/* the two buttons */}
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <a href={appleStoreUrl} target="_blank" rel="noopener noreferrer" ref={appleRef}>
            <img
              src={apple}
              alt="apple_store"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
              onClick={handleAppleClick}
              
            />
          </a>
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" ref={googleRef}>
            <img
              src={google}
              alt="google_play"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
              onClick={handleGoogleClick}
              
            />
          </a>
        </div>
      </div>
    </section>
  </div>
  )
};

export default SectionWrapper(About, "about");
