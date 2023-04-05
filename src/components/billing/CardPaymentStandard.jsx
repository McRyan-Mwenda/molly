import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { upgradeToStandard } from "../../reducers/package";

const CardPaymentStandard = ({ slug }) => {
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
          <label htmlFor="holder_name" id="holder_name">
            Cardholder name
          </label>
          <input
            type="text"
            name="holder_name"
            id="holder_name"
            placeholder="e.g. John Doe"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="card_number" id="card_number">
            Target name
          </label>
          <input
            type="text"
            name="card_number"
            id="card_number"
            placeholder="e.g. 987564378365"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="expiration_year" id="expiration_year">
            Expiration year
          </label>
          <input
            type="number"
            name="expiration_year"
            id="expiration_year"
            min="1900"
            max="2099"
            placeholder="e.g. 2024"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="expiration_month" id="expiration_month">
            Expiration month
          </label>
          <input
            type="number"
            name="expiration_month"
            id="expiration_month"
            min="01"
            max="12"
            placeholder="e.g. 02"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="cvc" id="cvc">
            CVC
          </label>
          <input
            type="number"
            name="cvc"
            id="cvc"
            placeholder="e.g. 100"
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

export default CardPaymentStandard;
