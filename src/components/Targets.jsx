import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import NewTarget from "./targets/NewTarget";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";

const GET_ALL_TARGETS = gql`
  query {
    getAllTargets {
      id
      target_name
      target_is_active
      category {
        category_name
      }
    }
  }
`;

const Targets = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  const { loading, error, data: targetsData } = useQuery(GET_ALL_TARGETS);

  if (targetsData) {
    dispatch(setIsLoading({ status: false }));
    // console.log(targetsData.getAllTargets);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <div>
      {targetsData ? (
        targetsData.getAllTargets.map((target, index) => {
          const bg = target.target_is_active ? "#6ee7b7" : "#fca5a5";
          const targetStatus = target.target_is_active ? "active" : "inactive";

          const list = (
            <>
              <Link to={`/app/dashboard/target/${target.id}`} key={index}>
                <div className="border rounded-md shadow hover:shadow-md bg-gray-50 p-4 mb-4 text-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-2xl">{target.target_name}</p>
                    <p
                      className="px-4 rounded-md border font-semibold text-white"
                      style={{ backgroundColor: bg }}
                    >
                      {targetStatus}
                    </p>
                  </div>
                  <hr className="mb-2" />
                  <p>
                    <span className="font-semibold">target category:</span>{" "}
                    {target.category.category_name}
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
      {targetsData && (
        <>
          {!targetsData.getAllTargets && (
            <div className="text-center my-40">
              <h1 className="text-3xl">
                Hmm... It seems you do not have any targets 🤔
              </h1>
              <p className="text-xl">
                Right click anywhere on the screen to open the menu and add your
                targets.
              </p>
            </div>
          )}
        </>
      )}

      {/* add button */}
      <Button
        icon="pi pi-plus"
        label="Add new target"
        severity="primary"
        aria-label="Filter"
        className="hover:shadow-md page-fonts"
        outlined
        onClick={() => setIsVisible(true)}
      />
      {/* add button */}

      {/* add target */}
      <NewTarget isVisible={isVisible} setIsVisible={setIsVisible} />
      {/* add target */}
    </div>
  );
};

export default Targets;
