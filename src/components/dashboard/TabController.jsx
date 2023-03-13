import AccountTab from "./tabs/AccountTab";
import BudgetTab from "./tabs/BudgetTab";
import ProfileTab from "./tabs/ProfileTab";
import ReportsTab from "./tabs/ReportsTab";
import TransactionsTab from "./tabs/TransactionsTab";

const TabController = ({ selectedIndex, setIsLoading }) => {
  if (selectedIndex === 0) {
    return <ProfileTab setIsLoading={setIsLoading} />;
  } else if (selectedIndex === 1) {
    return <AccountTab setIsLoading={setIsLoading} />;
  } else if (selectedIndex === 2) {
    return <TransactionsTab setIsLoading={setIsLoading} />;
  } else if (selectedIndex === 3) {
    return <BudgetTab setIsLoading={setIsLoading} />;
  } else if (selectedIndex === 4) {
    return <ReportsTab setIsLoading={setIsLoading} />;
  }
};

export default TabController;
