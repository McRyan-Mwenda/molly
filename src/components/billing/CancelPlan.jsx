import { Button } from "primereact/button";
import { useMutation, gql } from "@apollo/client";

const CancelPlan = () => {
  return (
    <div>
      <Button
        label="Cancel current plan & revert to 'Free' plan."
        severity="danger"
        outlined
        className="page-fonts absolute hover:shadow-md"
        onClick={() => {}}
      />
    </div>
  );
};

export default CancelPlan;
