import PageTitle from "../title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  PageTitle("Dashboard");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const checkAuth = () => {
    if (isLoggedIn == false) {
      return navigate("/app/signin");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [isLoggedIn]);

  return (
    <div className="page">
      <h1 className="text-3xl">Dashboard Page</h1>
    </div>
  );
};

export default Dashboard;
