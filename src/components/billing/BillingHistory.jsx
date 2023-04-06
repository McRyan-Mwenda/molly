import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";

const BillingHistory = () => {
  return (
    <div>
      <Button
        label="Request Billing History"
        severity="primary"
        className="w-full page-fonts absolute hover:shadow-md"
        outlined
        onClick={() => {}}
      />
    </div>
  );
};

export default BillingHistory;
