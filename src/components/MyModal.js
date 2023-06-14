import React, { useContext, useState } from "react";
import { CharacterContext } from "./Room";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyModal = () => {
  console.log("MyModal");
  let activities = ["Study", "Send CV", "Play a game"];
  const [selectedAct, setSelectedAct] = useState(-1);

  const charContext = useContext(CharacterContext);

  const handleActivityChosen = () => {
    console.log("handleActivityChosen");
    const state = charContext.charState;
    let value = "";
    switch (selectedAct) {
      case 0:
        if (state.energy < 30) {
          value = "Can't perform this action";
          toast.info("Man I am too tired to study now...", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        } else if (state.motivation < 10) {
          value = "Can't perform this action";
          toast.info("Nope, I don't want to study anymore :'(", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        }
        charContext.charDispatch({ type: "study", value: value });
        return;
      case 1:
        if (state.energy < 25) {
          value = "Can't perform this action";
          toast.info("Too tired to read the qualifications... zzzZZZzzz", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        } else if (
          (state.professionalism > 50 && state.motivation < 20) ||
          (state.professionalism <= 50 && state.motivation < 30)
        ) {
          value = "Can't perform this action";

          toast.info("I am sick of seeing 4+ years experience jobs!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        }
        charContext.charDispatch({ type: "send cv", value: value });
        return;
      case 2:
        charContext.charDispatch({ type: "game" });
        return;
      default:
        console.log("Could not choose the right act. MyModal.js");
        return;
    }
  };

  return (
    <>
      {/* <ToastContainer/> */}

      <div
        className="modal fade"
        id="staticBackdrop"
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
                Choose an action:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {activities.map((activity, index) => (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    className={
                      selectedAct === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    aria-current="true"
                    onClick={() => setSelectedAct(index)}
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={handleActivityChosen}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MyModal);
