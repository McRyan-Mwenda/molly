import { useParams } from "react-router-dom";

const Account = () => {
  const { id } = useParams();

  return (
    <div className="page">
      <h1 className="text-3xl">Account: {id} Page</h1>
    </div>
  );
};

export default Account;
