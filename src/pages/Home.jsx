import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../reducers/auth";

import PageTitle from "../title";

const Home = () => {
  PageTitle("Home");

  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1 className="text-3xl">Home Page</h1>
      <br />
      <br />
      <div className="border rounded-md p-4 w-6/12 mx-auto">
        <p className="text-center text-xl">User authentication state</p>
        <br />
        <p>token: {authData.token ? authData.token : <>No token</>}</p>
        <p>user is logged in: {authData.isLoggedIn ? <>True</> : <>False</>}</p>
      </div>
      <br />
      <div className="flex justify-between items-center w-6/12 mx-auto">
        <button
          className="border rounded-md bg-slate-200 mx-2"
          onClick={() => dispatch(signIn("1-02394239402041-12342-30-1234"))}
        >
          Signup
        </button>
        <button
          className="border rounded-md bg-slate-200 mx-2"
          onClick={() => dispatch(signOut())}
        >
          Signout
        </button>
      </div>
    </div>
  );
};

export default Home;
