import React, { useContext } from "react";
import { CharacterContext } from "./Room";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConfirmAct(props) {
  const charContext = useContext(CharacterContext);
  const id =
    props.children === "exercise"
      ? "confirmExerciseBackdrop"
      : "confirmSleepBackdrop";

  const confirmHandler = () => {
    let value = "";
    if (props.children === "exercise") {
      if (charContext.charState.energy < 30) {
        value = "Can't perform this action";
        toast.info("Dude I am too tired!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
    charContext.charDispatch({ type: props.children, value: value });
  };

  return (
    <>
      {/* <ToastContainer /> */}

      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        data-backdrop="static"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Are you sure you want to {props.children}?
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <div className="modal-body">
            
          </div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={confirmHandler}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmAct;
