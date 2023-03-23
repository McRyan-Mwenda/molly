import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import NewBudget from "./dialogs/NewBudget";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";

const GET_ALL_BUDGETS = gql`
  query {
    getAllBudgets {
      id
      budget_name
      budget_is_active
      category {
        category_name
      }
    }
  }
`;

const Budgets = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const { loading, error, data: allBudgetsData } = useQuery(GET_ALL_BUDGETS);

  if (allBudgetsData) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data.getAllBudgets);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <div>
      {allBudgetsData ? (
        allBudgetsData.getAllBudgets.map((budget, index) => {
          const bg = budget.budget_is_active ? "#6ee7b7" : "#fca5a5";
          const budgetStatus = budget.budget_is_active ? "active" : "inactive";

          const list = (
            <>
              <Link to={`/app/dashboard/budget/${budget.id}`} key={index}>
                <div className="border rounded-md hover:shadow-md bg-gray-50 p-4 mb-4 text-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-2xl">{budget.budget_name}</p>
                    <p
                      className="px-4 rounded-md border font-semibold text-white"
                      style={{ backgroundColor: bg }}
                    >
                      {budgetStatus}
                    </p>
                  </div>
                  <hr className="mb-2" />
                  <p>
                    <span className="font-semibold">Budget category:</span>{" "}
                    {budget.category.category_name}
                  </p>
                </div>
              </Link>
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
      {allBudgetsData && (
        <>
          {!allBudgetsData.getAllBudgets && (
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

      {/* add button */}
      <Button
        icon="pi pi-plus"
        label="Add new budget"
        security="primary"
        aria-label="Filter"
        className="hover:shadow-md page-fonts"
        outlined
        onClick={() => setIsVisible(true)}
      />
      {/* add button */}

      {/* add budget */}
      <NewBudget isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* add budget */}
    </div>
  );
};

export default Budgets;
