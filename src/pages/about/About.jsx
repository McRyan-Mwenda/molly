import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../assets/HeaderImage.jpg";
import StoryImage from "../../assets/About.png";
import VisionImage from "../../assets/Vision.png";
import MissionImage from "../../assets/Mission.png";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Any fool can write code that computers understand. We write code that humans can understand. <br /><br /> <i>Martin Fowler</i>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Welcome to our digital bank! We are a modern banking institution
              that is designed to meet all your financial needs, whether you are
              an individual or a business owner. Our mission is to provide you
              with a seamless banking experience that is fast, secure, and
              convenient.
            </p>
            <p>
              We believe that banking should be accessible to everyone, regardless of where they are in the world. That is why we have built a digital platform that allows you to access your accounts and perform transactions from anywhere at any time. You no longer have to visit a physical bank branch or wait in long queues to
              carry out your banking needs. With our digital bank, you can manage your finances on the go.
            </p>
            <p>
              At our digital bank, we prioritize the security of your personal
              and financial information. Our platform is built with the latest
              security protocols to ensure that your data is safe and secure. We
              also employ a team of security experts who monitor our systems
              24/7 to detect and prevent any unauthorized access.
            </p>
            <p>
              We understand that each customer has unique financial needs, and
              we have a range of products and services to cater to your specific
              requirements. Whether you need a personal loan, a business loan, a
              savings account, or a credit card, we have got you covered. We
              also offer a range of investment and insurance products to help
              you grow your wealth and protect your assets.
            </p>
            <p>
              Our team of experienced bankers is dedicated to providing you with
              the best possible banking experience. Whether you have a question
              about your account or need help with a transaction, our customer
              support team is always ready to assist you. You can reach out to
              us via phone, email, or live chat, and we will be happy to help.
            </p>
            <p>
              Thank you for choosing our digital bank as your financial partner.
              We look forward to serving you and helping you achieve your
              financial goals.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ratione harum corrupti aut perspiciatis! Ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ratione harum corrupti aut perspiciatis! Ab.
            </p>
          </div>
          <div className="about__section-img">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ratione harum corrupti aut perspiciatis! Ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ratione harum corrupti aut perspiciatis! Ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ratione harum corrupti aut perspiciatis! Ab.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
