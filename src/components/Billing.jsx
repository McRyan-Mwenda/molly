import PageTitle from "../assets/title";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  upgradeToPro,
  upgradeToStandard,
  downgradeToFree,
  makeEmployee,
  makeNotEmployee,
} from "../reducers/package";

const Billing = () => {
  PageTitle("Billing");

  const { slug } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1 className="text-3xl">{slug} Billing Page</h1>
      <br />
      <hr />
      <br />
      {slug === "standard" ? (
        <button
          className="py-2 px-4 rounded-md border border-zinc-400 shadow-md"
          onClick={() => dispatch(upgradeToStandard())}
        >
          Upgrade to {slug}
        </button>
      ) : (
        <button
          className="py-2 px-4 rounded-md border border-zinc-400 shadow-md"
          onClick={() => dispatch(upgradeToPro())}
        >
          Upgrade to {slug}
        </button>
      )}
      <br />
      <hr />
      <br />
      <button
        className="py-2 px-4 rounded-md border border-zinc-400 shadow-md"
        onClick={() => dispatch(downgradeToFree())}
      >
        Downgrade to Free
      </button>
    </div>
  );
};

export default Billing;
