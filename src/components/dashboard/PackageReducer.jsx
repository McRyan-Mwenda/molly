import { useDispatch } from "react-redux";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import {
  upgradeToPro,
  upgradeToStandard,
  downgradeToFree,
  makeEmployee,
  makeNotEmployee,
} from "../../reducers/package";
import { useEffect } from "react";

const GET_PROFILE = gql`
  query {
    getProfile {
      workspace_uid
      is_employee
      created_at
      user {
        email
        phone_number
        first_name
        last_name
      }
      package {
        name
        accounts
        no_of_accounts
        budgets
        no_of_budgets
        targets
        no_of_targets
        teams
        no_of_teams
        pdf_reports
        ai_assistant
      }
    }
  }
`;

const PackageReducer = () => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_PROFILE);

  if (data) {
    dispatch(setIsLoading({ status: false }));
    // console.log(data.getProfile);
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  const handleIsEmployee = (data) => {
    if (data.getProfile.is_employee) {
      dispatch(makeEmployee());
    } else {
      dispatch(makeNotEmployee());
    }
  };

  const handlePackage = (data) => {
    if (data.getProfile.package.name === "Free") {
      dispatch(downgradeToFree());
    } else if (data.getProfile.package.name === "Standard") {
      dispatch(upgradeToStandard());
    } else if (data.getProfile.package.name === "Pro") {
      dispatch(upgradeToPro());
    }
  };

  useEffect(() => {
    data && (handleIsEmployee(data), handlePackage(data));
  }, [data]);

  return null;
};

export default PackageReducer;
