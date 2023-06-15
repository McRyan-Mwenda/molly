import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { features } from "../constants/data";
import Card from "../UI/Card";

const Features = () => {
  return (
    <section className="features">
      <div className="container features__container">
        <SectionHead icon={<FaCrown />} title="Features" />

        <div className="features__wrapper">
          {features.map(({ id, icon, title, content }) => {
            return (
              <Card className="features__feature" key={id}>
                <img src={icon} className="features__feature-icon"/>
                <h4>{title}</h4>
                <small>{content}</small>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
