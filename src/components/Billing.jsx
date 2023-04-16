import PageTitle from "../assets/title";
import { useParams } from "react-router-dom";
import MakePayment from "./billing/MakePayment";

const Billing = () => {
  PageTitle("Billing");

  const { slug } = useParams();

  return (
    <div className="page">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Billing Page</h1>
        <button
          className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
          onClick={() => {
            window.history.back();
          }}
        >
          <i className="bi bi-arrow-left-short"></i> Back
        </button>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <div
          className="p-4 border border-zinc-200 rounded-md shadow h-fit"
          style={{
            width: "60%",
          }}
        >
          <MakePayment slug={slug} />
        </div>
        <div
          className="p-4 border border-zinc-200 rounded-md shadow text-lg mx-2"
          style={{
            width: "40%",
          }}
        >
          <p className="mb-2 font-bold">Billing Summary</p>
          <table
            class="table-auto"
            style={{
              width: "100%",
            }}
          >
            <thead className="border-b border-zinc-400">
              <tr>
                <th className="text-left">Package</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            {slug === "standard" ? (
              <>
                <tbody>
                  <tr>
                    <td className="text-left">{slug}</td>
                    <td className="text-right">$10</td>
                  </tr>
                </tbody>
              </>
            ) : (
              <>
                <tbody>
                  <tr>
                    <td className="text-left">{slug}</td>
                    <td className="text-right">$15</td>
                  </tr>
                </tbody>
              </>
            )}
          </table>
          <div className="my-2 text-base">
            <p className="mb-2 font-semibold">Package features:</p>
            {slug === "standard" ? (
              <>
                <ul>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> No ads
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Budget setting
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Target setting
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Multiple accounts
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Data analysis
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Team management
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> 27/7 customer
                    support
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> No ads
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Budget setting
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Target setting
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Multiple accounts
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Data analysis
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> Generate reports
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> AI assistance &
                    analysis
                  </li>
                  <li>
                    <i class="bi bi-arrow-right-short"></i> 27/7 customer
                    support
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Billing;
