import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { setNotification } from "../reducers/notifications";

const GET_ALL_BUDGETS = gql`
  query {
    getAllBudgets {
      budget_name
      budget_description
      budget_amount
      budget_start_date
      budget_end_date
      category {
        category_name
      }
    }
  }
`;

const Budgets = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_ALL_BUDGETS);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data.getAllBudgets);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
    dispatch(
      setNotification({
        type: "error",
        message: `${error.message}`,
      })
    );
  }

  return (
    <div>
      {data ? (
        data.getAllBudgets.map((budget, index) => {
          const list = (
            <>
              <div
                className="border rounded-md shadow-md p-4 bg-gray-50 mb-4 text-lg"
                key={index}
              >
                <p className="text-2xl mb-2">{budget.budget_name}</p>
                <hr className="mb-2" />
                <p>
                  <span className="font-semibold">Goal:</span>{" "}
                  {budget.budget_description}
                </p>
                <p>
                  <span className="font-semibold">Budget amount:</span>{" "}
                  {budget.budget_amount.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {budget.category.category_name}
                </p>
                <p>
                  <span className="font-semibold">Start date:</span>{" "}
                  {budget.budget_start_date}
                </p>
                <p>
                  <span className="font-semibold">End date:</span>{" "}
                  {budget.budget_end_date}
                </p>
              </div>
            </>
          );

          return list;
        })
      ) : (
        <>
          <div className="text-center my-40">
            <span className="loader"></span>
          </div>
        </>
      )}
      {data && (
        <>
          {!data.getAllBudgets && (
            <div className="text-center my-40">
              <h1 className="text-3xl">
                Hmm... It seems you do not have any budgets 🤔
              </h1>
              <p className="text-xl">
                Right click anywhere on the screen to open the menu and add your
                budgets.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Budgets;
