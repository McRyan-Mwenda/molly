import { Link } from "react-router-dom";
import { Button } from "primereact/button";

import PageTitle from "../title";

const Pricing = () => {
  PageTitle("Pricing");

  return (
    <div className="page">
      <div className="flex justify-center items-center my-8">
        <div
          className="py-2 px-4 rounded-md border border-zinc-300 shadow-md mx-4"
          style={{ width: "30%", height: "550px" }}
        >
          <p className="text-center mb-2" style={{ fontSize: "56px" }}>
            🐖
          </p>
          <h1 className="text-3xl font-semibold text-center mb-4">Free</h1>
          <p className="mb-4 text-lg text-center">
            Best for new users to test out Finance Fluent for their finance
            management
          </p>
          <p className="mb-2 text-lg text-center font-semibold">Forever Free</p>
          <ul>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> 1 Account
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Manage you business &
                  transactions
                </li>
              </ul>
            </li>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> 4 Budgets
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Budget and organize
                  your spending
                </li>
              </ul>
            </li>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> Ads
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> You can support us by
                  viewing some ads
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="py-2 px-4 rounded-md border border-zinc-300 shadow-md mx-4"
          style={{ width: "30%", height: "550px" }}
        >
          <p className="text-center mb-2" style={{ fontSize: "56px" }}>
            🐉
          </p>
          <h1 className="text-3xl font-semibold text-center mb-4">Pro</h1>
          <p className="mb-4 text-lg text-center">
            Best of Finance Fluent for bulk business/personal finance management
          </p>
          <p className="mb-2 text-lg text-center font-semibold">
            $5 / month only
          </p>
          <ul>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> 10 Account
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Manage you business &
                  transactions
                </li>
              </ul>
            </li>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> 40 Budgets
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Budget and organize
                  your spending
                </li>
              </ul>
            </li>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> Generate Reports
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Generate PDF reports
                  for your offline meetings
                </li>
              </ul>
            </li>
            <li className="text-lg">
              <i class="bi bi-arrow-right-short"></i> No Ads
              <ul className="ml-6">
                <li className="font-semibold text-sm">
                  <i class="bi bi-arrow-right-short"></i> Absolutely none. Not
                  even one!
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/app/billing">
            <Button
              label="Upgrade"
              severity="success"
              className="w-full page-fonts absolute hover:shadow-md"
              style={{ bottom: -25 }}
              outlined
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
