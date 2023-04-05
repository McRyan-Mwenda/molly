import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { upgradeToStandard } from "../../reducers/package";

const MpesaPayment = ({ slug }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(upgradeToStandard());
        }}
      >
        <div className="mb-2">
          <label htmlFor="phone_owner" id="phone_owner">
            Phone owner name
          </label>
          <input
            type="text"
            name="phone_owner"
            id="phone_owner"
            placeholder="e.g. John Doe"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number" id="phone_number">
            Phone number
          </label>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="e.g. +254712345678"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mt-4">
          <Button
            type="submit"
            label="Submit"
            severity="success"
            className="w-full page-fonts absolute hover:shadow-md"
            outlined
          />
        </div>
      </form>
    </div>
  );
};

export default MpesaPayment;
