import { Chart } from "primereact/chart";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";

const GET_TRANSACTION = gql`
  query ($id: ID!) {
    getTransactionsByAccount(id: $id) {
      id
      transaction_type
      transaction_amount
      currency_code
      transaction_date
      description
      created_at
      updated_at
      category {
        category_name
        category_description
      }
    }
  }
`;

const Reports = ({ id }) => {
  const dispatch = useDispatch();

  const [pieData, setPieData] = useState({});
  const [pieOptions, setPieOptions] = useState({});

  const [lineData, setLineData] = useState({});
  const [lineOptions, setLineOptions] = useState({});

  const [polarData, setPolarData] = useState({});
  const [polarOptions, setPolarOptions] = useState({});

  const [compareData, setCompareData] = useState({});
  const [compareOptions, setCompareOptions] = useState({});

  const [perCategoryData, setPerCategoryData] = useState({});
  const [perCategoryOptions, setPerCategoryOptions] = useState({});

  const {
    loading,
    error,
    data: reportData,
  } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });

  if (reportData) {
    dispatch(setIsLoading({ status: false }));
    // console.log(reportData);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  const categoryBreakdown = (reportData) => {
    const purchases = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Purchases"
    );

    const investments = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Investments"
    );

    const loans = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Loans"
    );

    const donations = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Donations"
    );

    const transfers = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Transfers"
    );

    const payments = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Payments"
    );

    const exchanges = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Exchanges"
    );

    const gifts = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Gifts"
    );

    const sales = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Sales"
    );

    const payroll = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Payroll"
    );

    const mergers = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Mergers & acquisitions"
    );

    const getTotalTransactions = (arr) => {
      const allTransactions = arr.map((record) =>
        parseFloat(record.transaction_amount.replace(",", ""))
      );

      let sum = null;

      for (let i = 0; i < allTransactions.length; i++) {
        sum += allTransactions[i];
      }

      return sum;
    };

    const data = {
      labels: [
        "Purchases",
        "Investments",
        "Loans",
        "Donations",
        "Transfers",
        "Payments",
        "Exchanges",
        "Gifts",
        "Sales",
        "Payrolls",
        "Mergers & acquisitions",
      ],
      datasets: [
        {
          label: "Total Transaction Amount Per Category",
          data: [
            getTotalTransactions(purchases),
            getTotalTransactions(investments),
            getTotalTransactions(loans),
            getTotalTransactions(donations),
            getTotalTransactions(transfers),
            getTotalTransactions(payments),
            getTotalTransactions(exchanges),
            getTotalTransactions(gifts),
            getTotalTransactions(sales),
            getTotalTransactions(payroll),
            getTotalTransactions(mergers),
          ],
          backgroundColor: [
            "rgba(248, 113, 113, 0.2)",
            "rgba(251, 146, 60, 0.2)",
            "rgba(251, 191, 36, 0.2)",
            "rgba(163, 230, 53, 0.2)",
            "rgba(74, 222, 128, 0.2)",
            "rgba(34, 211, 238, 0.2)",
            "rgba(56, 189, 248, 0.2)",
            "rgba(96, 165, 250, 0.2)",
            "rgba(167, 139, 250, 0.2)",
            "rgba(192, 132, 252, 0.2)",
            "rgba(232, 121, 249, 0.2)",
          ],
          borderColor: [
            "rgb(248, 113, 113)",
            "rgb(251, 146, 60)",
            "rgb(251, 191, 36)",
            "rgb(163, 230, 53)",
            "rgb(74, 222, 128)",
            "rgb(34, 211, 238)",
            "rgb(56, 189, 248)",
            "rgb(96, 165, 250)",
            "rgb(167, 139, 250)",
            "rgb(192, 132, 252)",
            "rgb(232, 121, 249)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setPieData(data);
    setPieOptions(options);
  };

  const transactionPerCategory = (reportData) => {
    const purchases = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Purchases"
    );

    const investments = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Investments"
    );

    const loans = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Loans"
    );

    const donations = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Donations"
    );

    const transfers = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Transfers"
    );

    const payments = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Payments"
    );

    const exchanges = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Exchanges"
    );

    const gifts = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Gifts"
    );

    const sales = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Sales"
    );

    const payroll = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Payroll"
    );

    const mergers = reportData.getTransactionsByAccount.filter(
      (record) => record.category.category_name === "Mergers & acquisitions"
    );

    const data = {
      labels: [
        "Purchases",
        "Investments",
        "Loans",
        "Donations",
        "Transfers",
        "Payments",
        "Exchanges",
        "Gifts",
        "Sales",
        "Payrolls",
        "Mergers & acquisitions",
      ],
      datasets: [
        {
          label: "Transactions Per Category",
          data: [
            purchases.length,
            investments.length,
            loans.length,
            donations.length,
            transfers.length,
            payments.length,
            exchanges.length,
            gifts.length,
            sales.length,
            payroll.length,
            mergers.length,
          ],
          backgroundColor: [
            "rgba(248, 113, 113, 0.2)",
            "rgba(251, 146, 60, 0.2)",
            "rgba(251, 191, 36, 0.2)",
            "rgba(163, 230, 53, 0.2)",
            "rgba(74, 222, 128, 0.2)",
            "rgba(34, 211, 238, 0.2)",
            "rgba(56, 189, 248, 0.2)",
            "rgba(96, 165, 250, 0.2)",
            "rgba(167, 139, 250, 0.2)",
            "rgba(192, 132, 252, 0.2)",
            "rgba(232, 121, 249, 0.2)",
          ],
          borderColor: [
            "rgb(248, 113, 113)",
            "rgb(251, 146, 60)",
            "rgb(251, 191, 36)",
            "rgb(163, 230, 53)",
            "rgb(74, 222, 128)",
            "rgb(34, 211, 238)",
            "rgb(56, 189, 248)",
            "rgb(96, 165, 250)",
            "rgb(167, 139, 250)",
            "rgb(192, 132, 252)",
            "rgb(232, 121, 249)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setPerCategoryData(data);
    setPerCategoryOptions(options);
  };

  const transactionTrend = (reportData) => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const getAverage = (reportData) => {
      const mySet = reportData.getTransactionsByAccount.map((record) =>
        parseFloat(record.transaction_amount.replace(",", ""))
      );

      let sum = 0;

      for (let i = 0; i < mySet.length; i++) {
        sum += mySet[i];
      }

      const average = sum / mySet.length;

      return average;
    };

    const data = {
      labels: reportData.getTransactionsByAccount.map((record) => {
        return `ID: ${record.id}`;
      }),
      datasets: [
        {
          label: "General Transaction Trend",
          fill: true,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
          yAxisID: "y",
          backgroundColor: "rgba(96, 165, 250,0.2)",
          data: reportData.getTransactionsByAccount.map((record) =>
            parseFloat(record.transaction_amount.replace(",", ""))
          ),
        },
        {
          label: "Transaction Average",
          fill: true,
          borderColor: documentStyle.getPropertyValue("--gray-500"),
          tension: 0.4,
          borderDash: [5, 5],
          yAxisID: "y1",
          backgroundColor: "rgba(156, 163, 175,0.2)",
          data: reportData.getTransactionsByAccount.map(() =>
            getAverage(reportData)
          ),
        },
      ],
    };

    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setLineData(data);
    setLineOptions(options);
  };

  const binaryClassification = (reportData) => {
    const payable = reportData.getTransactionsByAccount.filter(
      (record) => record.transaction_type === "payable"
    );

    const receivable = reportData.getTransactionsByAccount.filter(
      (record) => record.transaction_type === "receivable"
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Payable", "Receivable"],
      datasets: [
        {
          data: [payable.length, receivable.length],
          backgroundColor: [
            documentStyle.getPropertyValue("--orange-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setPolarData(data);
    setPolarOptions(options);
  };

  const payableVsReceivable = (reportData) => {
    const payableData = reportData.getTransactionsByAccount.filter(
      (report) => report.transaction_type === "payable"
    );

    const receivableData = reportData.getTransactionsByAccount.filter(
      (report) => report.transaction_type === "receivable"
    );

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const compareLength = (payableData, receivableData) => {
      if (payableData.length > receivableData.length) {
        return payableData.map((record) => ``);
      } else if (receivableData.length > payableData.length) {
        return receivableData.map((record) => ``);
      } else if (receivableData.length == payableData.length) {
        return receivableData.map((record) => ``);
      }
    };

    const data = {
      labels: compareLength(payableData, receivableData),
      datasets: [
        {
          label: "Payable Transactions Trend",
          fill: true,
          borderColor: documentStyle.getPropertyValue("--orange-500"),
          tension: 0.4,
          yAxisID: "y",
          backgroundColor: "rgba(251, 146, 60,0.2)",
          data: payableData.map((record) =>
            parseFloat(record.transaction_amount.replace(",", ""))
          ),
        },
        {
          label: "Receivable Transactions Trend",
          fill: true,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          tension: 0.4,
          yAxisID: "y1",
          backgroundColor: "rgba(74, 222, 128,0.2)",
          data: receivableData.map((record) =>
            parseFloat(record.transaction_amount.replace(",", ""))
          ),
        },
      ],
    };

    const options = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setCompareData(data);
    setCompareOptions(options);
  };

  useEffect(() => {
    reportData &&
      (transactionTrend(reportData),
      categoryBreakdown(reportData),
      payableVsReceivable(reportData),
      binaryClassification(reportData),
      transactionPerCategory(reportData));
  }, [reportData]);

  return (
    <div>
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-light flex justify-between items-center">
          Data Analysis
        </h1>
        <div className="mr-4">
          <button className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow">
            <i className="bi bi-file-pdf"></i> Generate report
          </button>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center w-full">
        <div
          className="p-4 mx-1 flex items-center"
          style={{
            width: "100%",
          }}
        >
          <Chart
            type="bar"
            data={pieData}
            options={pieOptions}
            className="page-fonts w-full"
          />
        </div>
        <div
          className="p-4 mx-1 flex items-center"
          style={{
            width: "100%",
          }}
        >
          <Chart
            type="bar"
            data={perCategoryData}
            options={perCategoryOptions}
            className="page-fonts w-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="p-4 mx-1 flex justify-center items-center"
          style={{
            width: "100%",
          }}
        >
          <Chart
            type="line"
            data={compareData}
            options={compareOptions}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          className="px-4 pb-4 pt-20 mx-1"
          style={{
            width: "30%",
          }}
        >
          <Chart
            type="doughnut"
            data={polarData}
            options={polarOptions}
            className="page-fonts w-full"
          />
        </div>
      </div>
      <div className="p-4 mx-1 flex justify-center items-center">
        <Chart
          type="line"
          data={lineData}
          options={lineOptions}
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Reports;
