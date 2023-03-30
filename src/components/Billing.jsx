import { useParams } from "react-router-dom";

import PageTitle from "./title";

const Billing = () => {
  PageTitle("Billing");

  const { slug } = useParams();

  return (
    <div className="page">
      <h1 className="text-3xl">{slug} Billing Page</h1>
    </div>
  );
};

export default Billing;
