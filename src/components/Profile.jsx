import moment from "moment";
import TwoFA from "./2fa/TwoFA";
import PageTitle from "./title";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { setIsLoading } from "../reducers/loading";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeactivate from "./2fa/ConfirmDeactivate";

const GET_PROFILE = gql`
  query {
    getProfile {
      tier
      account_limit
      budget_limit
      pdf_gen
      created_at
      user {
        email
        phone_number
        first_name
        last_name
      }
    }
  }
`;

const Profile = () => {
  PageTitle("Profile");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isTwoFA = useSelector((state) => state.auth.twoFA);
  const packageTier = useSelector((state) => state.package.package);

  const [isVisible, setIsVisible] = useState(false);
  const [isDeactivate, setIsDeactivate] = useState(false);
  const [bg, setBg] = useState();

  const checkBg = (packageTier) => {
    if (packageTier === "Pro") {
      return setBg("#34d399");
    } else if (packageTier === "Standard") {
      return setBg("#fb923c");
    } else if (packageTier === "Free") {
      return setBg("#a1a1aa");
    }
  };

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

  const checkAuth = () => {
    if (isLoggedIn == false) {
      navigate("/app/signin");
    }
  };

  useEffect(() => {
    checkAuth();
    checkBg(packageTier);
  }, [isLoggedIn, packageTier]);

  return (
    <div className="page">
      {data ? (
        <>
          <div className="border rounded-md shadow-md p-4 bg-gray-50 text-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="text-2xl">User & profile</p>
              <button
                className="text-blue-500 hover:text-blue-800 border border-zinc-300 hover:border-zinc-400 px-2 rounded-md bg-slate-50 hover:bg-slate-100 shadow"
                onClick={() => {
                  window.history.back();
                }}
              >
                <i className="bi bi-arrow-left-short"></i> Back
              </button>
            </div>
            <hr className="mb-2" />
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {data.getProfile.user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {data.getProfile.user.phone_number}
            </p>
            <p>
              <span className="font-semibold">First name:</span>{" "}
              {data.getProfile.user.first_name}
            </p>
            <p>
              <span className="font-semibold">Last name:</span>{" "}
              {data.getProfile.user.last_name}
            </p>
            <br />
            <div
              className="py-2 px-4 rounded-md border border-zinc-400 text-white"
              style={{
                backgroundColor: bg,
              }}
            >
              <p>
                <span className="font-semibold">Profile tier:</span>{" "}
                {data.getProfile.tier}
              </p>
              <p>
                <span className="font-semibold">Max accounts:</span>{" "}
                {data.getProfile.account_limit}
              </p>
              <p>
                <span className="font-semibold">Max budgets:</span>{" "}
                {data.getProfile.budget_limit}
              </p>
              <p>
                <span className="font-semibold">Generate reports:</span>{" "}
                {data.getProfile.pdf_gen ? <>True</> : <>False</>}
              </p>
              <p>
                <span className="font-semibold">Created on:</span>{" "}
                {moment.unix(data.getProfile.created_at).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="border rounded-md shadow-md p-4 bg-gray-50 text-lg">
            <div className="mb-2 flex justify-between items-center">
              <p className="text-2xl">Security</p>
            </div>
            <hr className="mb-2" />
            <div className="flex justify-between items-center">
              <p className="font-semibold text-xl">
                Two Factor Authentication (2FA):
              </p>
              {isTwoFA ? (
                <>
                  <p
                    className="px-4 py-1 rounded-md border font-semibold text-white ml-4"
                    style={{ backgroundColor: "#6ee7b7" }}
                  >
                    enabled
                  </p>
                </>
              ) : (
                <>
                  <p
                    className="px-4 py-1 rounded-md border font-semibold text-white ml-4 p-overlay-badge"
                    style={{ backgroundColor: "#fca5a5" }}
                  >
                    disabled <Badge severity="danger" size="normal"></Badge>
                  </p>
                </>
              )}
            </div>
            <hr className="my-2" />
            <h1 className="text-lg underline font-semibold">
              What is Two Factor Authentication ?
            </h1>
            <p className="my-4">
              Two-Factor Authentication (2FA) is a security process that
              requires users to provide two forms of authentication to access an
              application or system. The two factors are typically something the
              user knows (e.g., a password or PIN) and something the user has
              (e.g., a physical token or a smartphone).
            </p>
            <h1 className="text-lg underline font-semibold">
              Why is it important ?
            </h1>
            <p className="mt-4">
              By requiring two forms of authentication, 2FA makes it harder for
              unauthorized users to access an account even if they know the
              password. It adds an extra layer of security beyond a
              password-only authentication system.
            </p>
            <hr className="my-2" />
            {isTwoFA ? (
              <>
                <Button
                  icon="pi pi-lock-open"
                  label="Disable Two Factor Authentication"
                  severity="danger"
                  aria-label="Filter"
                  className="hover:shadow-md page-fonts"
                  outlined
                  onClick={() => setIsDeactivate(true)}
                />
              </>
            ) : (
              <>
                <Button
                  icon="pi pi-lock"
                  label="Enable Two Factor Authentication"
                  severity="success"
                  aria-label="Filter"
                  className="hover:shadow-md page-fonts"
                  outlined
                  onClick={() => setIsVisible(true)}
                />
              </>
            )}
            <TwoFA isVisible={isVisible} setIsVisible={setIsVisible} />
            <ConfirmDeactivate
              isDeactivate={isDeactivate}
              setIsDeactivate={setIsDeactivate}
            />
          </div>
        </>
      ) : (
        <>
          <div className="text-center my-56">
            <span className="loader"></span>
          </div>
        </>
      )}
      {data && (
        <>
          {!data.getProfile && (
            <div className="text-center my-40">
              <h1 className="text-3xl">
                Hmm... You shouldn't be seeing this 🤔
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
