import { Link } from "react-router-dom";
import PageTitle from "../assets/title";
import data from "../assets/pricing.json";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const Pricing = () => {
  PageTitle("Pricing");

  const packages = data;

  return (
    <div className="page">
      <h1 className="text-3xl text-center my-4">
        Grow better with the right plan
      </h1>
      <p className="text-center text-xl my-4 mx-10">
        Pick a plan to grow your yourself, your brand or your business with. All
        plans come with 24/7 customer support. Change or cancel your plan at any
        time.
      </p>
      <div className="flex justify-center items-center my-8">
        <div
          className="py-2 px-4 rounded-md border border-zinc-300 shadow-md mx-4"
          style={{ width: "30%", height: "350px" }}
        >
          <p className="text-center mb-2" style={{ fontSize: "56px" }}>
            🐒
          </p>
          <h1 className="text-3xl font-semibold text-center mb-4">Free</h1>
          <p className="mb-4 text-lg text-center">
            Best for new users and personal finance management
          </p>
          <p className="mb-2 text-lg text-center font-semibold">Forever Free</p>
        </div>
        <div
          className="py-2 px-4 rounded-md border border-zinc-300 shadow-md mx-4"
          style={{ width: "30%", height: "350px" }}
        >
          <p className="text-center mb-2" style={{ fontSize: "56px" }}>
            🦧
          </p>
          <h1 className="text-3xl font-semibold text-center mb-4">Standard</h1>
          <p className="mb-4 text-lg text-center">
            Best for small to mid size enterprises finance management
          </p>
          <p className="mb-2 text-lg text-center font-semibold">
            $5 / month only
          </p>
          <Link to="/app/billing/standard">
            <Button
              label="Upgrade"
              severity="primary"
              className="w-full page-fonts absolute hover:shadow-md"
              style={{ bottom: -25 }}
              outlined
            />
          </Link>
        </div>
        <div
          className="py-2 px-4 rounded-md border border-zinc-300 shadow-md mx-4"
          style={{ width: "30%", height: "350px" }}
        >
          <p className="text-center mb-2" style={{ fontSize: "56px" }}>
            🦍
          </p>
          <h1 className="text-3xl font-semibold text-center mb-4">Pro</h1>
          <p className="mb-4 text-lg text-center">
            Best for big enterprise finance management
          </p>
          <p className="mb-2 text-lg text-center font-semibold">
            $15 / month only
          </p>
          <Link to="/app/billing/pro">
            <Button
              label="Upgrade"
              severity="primary"
              className="w-full page-fonts absolute hover:shadow-md"
              style={{ bottom: -25 }}
              outlined
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center my-4 mx-10">
        <h1 className="text-2xl">Package summary</h1>
        <p className="text-lg">
          Feel free to{" "}
          <Link to="/contacts" className="text-sky-600 hover:text-sky-900">
            contact us
          </Link>{" "}
          for more inquiry.
        </p>
      </div>
      <DataTable
        value={packages}
        tableStyle={{ width: "94.75%", margin: "2rem auto" }}
      >
        <Column field="package" header="Package"></Column>
        <Column field="accounts" header="Accounts"></Column>
        <Column field="budgets" header="Budgets"></Column>
        <Column field="targets" header="Targets"></Column>
        <Column field="teams" header="Teams"></Column>
        <Column field="can_generate_report" header="PDF report"></Column>
        <Column field="AI_assistant" header="AI assistant"></Column>
        <Column field="ads" header="Has Ads"></Column>
      </DataTable>
    </div>
  );
};

export default Pricing;
