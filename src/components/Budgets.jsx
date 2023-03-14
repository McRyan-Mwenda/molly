import moment from "moment";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { setNotification } from "../reducers/notifications";

const GET_ALL_BUDGETS = gql`
  query {
    getAllBudgets {
      budget_name
      budget_description
      budget_start_date
      budget_end_date
      category {
        public_id
        category_name
      }
    }
  }
`;

const Budgets = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_ALL_BUDGETS);

  if (data) {
    dispatch(
      setIsLoading({
        status: false,
      })
    );
    console.log(data.getAllBudgets);
  }

  if (loading) {
    dispatch(
      setIsLoading({
        status: true,
      })
    );
  }

  if (error) {
    dispatch(
      setIsLoading({
        status: false,
      })
    );
    dispatch(
      setNotification({
        type: "error",
        message: `${error.message}`,
      })
    );
  }

  return (
    <div>
      <h1 className="text-3xl">Budgets panel</h1>
      <br />
      {data ? (
        data.getAllBudgets.map((budget, index) => {
          const list = (
            <>
              <div
                className="border rounded-md shadow-md p-4 bg-gray-50 mb-4"
                key={index}
              >
                <p className="text-xl mb-2">{budget.budget_name}</p>
                <hr className="mb-2" />
                <p>
                  <span className="font-semibold">Goal:</span>{" "}
                  {budget.budget_description}
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {budget.category.category_name}
                </p>
                <p>
                  <span className="font-semibold">Start date:</span>{" "}
                  {moment
                    .unix(budget.budget_start_date)
                    .format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <p>
                  <span className="font-semibold">End date:</span>{" "}
                  {moment
                    .unix(budget.budget_end_date)
                    .format("YYYY-MM-DD HH:mm:ss")}
                </p>
              </div>
            </>
          );

          return list;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Budgets;
