import { useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { deactivateTwoFA } from "../../reducers/auth";

const ConfirmDeactivate = ({ isDeactivate, setIsDeactivate }) => {
  const dispatch = useDispatch();

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        security="primary"
        onClick={() => setIsDeactivate(false)}
        className="p-button-text"
      />
      <Button
        label="Disable"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          dispatch(deactivateTwoFA());
        }}
        autoFocus
      />
    </div>
  );

  return (
    <div>
      <Dialog
        header="Disable 2FA"
        visible={isDeactivate}
        style={{ width: "50vw" }}
        onHide={() => setIsDeactivate(false)}
        className="page-fonts"
        footer={footerContent}
      >
        <p className="text-2xl">
          Are you sure you want to disable Two Factor Authentication?
        </p>
      </Dialog>
    </div>
  );
};

export default ConfirmDeactivate;
