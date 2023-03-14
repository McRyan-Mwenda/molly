import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import PageTitle from "../title";

const Dashboard = ({ setIsLoading }) => {
  PageTitle("Dashboard");

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      <h1 className="text-xl">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
