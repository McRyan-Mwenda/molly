import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { Chart } from "primereact/chart";

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

  const {
    loading,
    error,
    data: reportData,
  } = useQuery(GET_TRANSACTION, {
    variables: { id: id },
  });

  if (reportData) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data);
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

    const documentStyle = getComputedStyle(document.documentElement);

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
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--red-500"),
            documentStyle.getPropertyValue("--orange-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--lime-500"),
            documentStyle.getPropertyValue("--green-500"),
            documentStyle.getPropertyValue("--tal-500"),
            documentStyle.getPropertyValue("--cyan-500"),
            documentStyle.getPropertyValue("--indigo-500"),
            documentStyle.getPropertyValue("--violet-500"),
            documentStyle.getPropertyValue("--purple-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--red-400"),
            documentStyle.getPropertyValue("--orange-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--lime-400"),
            documentStyle.getPropertyValue("--green-400"),
            documentStyle.getPropertyValue("--teal-400"),
            documentStyle.getPropertyValue("--cyan-400"),
            documentStyle.getPropertyValue("--indigo-400"),
            documentStyle.getPropertyValue("--violet-400"),
            documentStyle.getPropertyValue("--purple-400"),
          ],
        },
      ],
    };

    const options = {
      cutout: "60%",
    };

    setPieData(data);
    setPieOptions(options);
  };

  const transactionTrend = (reportData) => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const data = {
      labels: reportData.getTransactionsByAccount.map((record) => {
        return `Transaction ID: ${record.id}`;
      }),
      datasets: [
        {
          label: "Transaction history",
          data: reportData.getTransactionsByAccount.map((record) =>
            parseFloat(record.transaction_amount.replace(",", ""))
          ),
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
          backgroundColor: "#bfdbfe",
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
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
          ticks: {
            color: textColorSecondary,
          },
          grid: {
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
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
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

  useEffect(() => {
    reportData &&
      (categoryBreakdown(reportData),
      transactionTrend(reportData),
      binaryClassification(reportData));
  }, [reportData]);

  return (
    <div className="my-8">
      <div
        className="p-4 mx-1"
        style={{
          width: "100%",
        }}
      >
        <Chart type="line" data={lineData} options={lineOptions} />
      </div>
      <div className="flex justify-center mt-8">
        <div
          className="p-4 mx-1 flex items-center"
          style={{
            width: "40%",
          }}
        >
          <Chart
            type="doughnut"
            data={pieData}
            options={pieOptions}
            className="page-fonts w-full"
          />
        </div>
        <div
          className="px-4 pb-4 pt-20 mx-1 flex items-center"
          style={{
            width: "36.25%",
          }}
        >
          <Chart
            type="pie"
            data={polarData}
            options={polarOptions}
            className="page-fonts w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
