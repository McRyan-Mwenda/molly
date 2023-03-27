import VerifyOTP from "./VerifyOTP";
import { Image } from "primereact/image";
import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { useQuery, gql } from "@apollo/client";
import { setIsLoading } from "../../reducers/loading";
import { ProgressSpinner } from "primereact/progressspinner";

const GET_QRCODE = gql`
  query {
    generateQRCode
  }
`;

const TwoFA = ({ isVisible, setIsVisible }) => {
  const dispatch = useDispatch();

  const { data: qrcode, loading, error } = useQuery(GET_QRCODE);

  if (qrcode) {
    dispatch(setIsLoading({ status: false }));
  }

  if (loading) {
    dispatch(setIsLoading({ status: true }));
  }

  if (error) {
    dispatch(setIsLoading({ status: false }));
  }

  return (
    <Dialog
      header="Scan QR-Code"
      visible={isVisible}
      style={{ width: "50vw" }}
      onHide={() => setIsVisible(false)}
      className="page-fonts"
    >
      {qrcode ? (
        <>
          <div className="flex justify-between">
            <div style={{ width: "50%" }}>
              <p className="text-lg font-semibold">
                To enable Two Factor Authentication:
              </p>
              <ul>
                <li>
                  <i class="bi bi-arrow-right-short"></i> Download an
                  authenticator app
                </li>
                <li>
                  <i class="bi bi-arrow-right-short"></i>
                  We recommend:
                  <a
                    href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1"
                    className="mx-2 text-sky-600 hover:text-sky-900"
                  >
                    Google Authenticator
                  </a>
                </li>
                <li>
                  <i class="bi bi-arrow-right-short"></i> Scan the QR-Code
                </li>
                <li>
                  <i class="bi bi-arrow-right-short"></i> Enter the six digit
                  OTP code generated
                </li>
              </ul>
              <VerifyOTP />
            </div>
            <div className="mx-auto rounded-md shadow border w-fit">
              <Image
                src={`data:image/png;base64,${qrcode.generateQRCode}`}
                alt="Image"
                width="300"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card flex justify-content-center">
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              fill="var(--surface-ground)"
              animationDuration=".5s"
            />
          </div>
        </>
      )}
    </Dialog>
  );
};

export default TwoFA;
