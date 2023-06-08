import React, { useContext, useState } from "react";
import { CharacterContext } from "./Room";

const MyModal = () => {
  let activities = ["Study", "Send CV", "Play a game"];
  const [selectedAct, setSelectedAct] = useState(-1);

  const charContext = useContext(CharacterContext);

  const handleActivityChosen = () => {
    switch (selectedAct) {
      case 0:
        charContext.charDispatch({type: "study"});
        return;
      case 1:
        charContext.charDispatch({type: "send cv"});
        return;
      case 2:
        charContext.charDispatch({type: "game"});
        return;
    }
  };

  return (
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
                  style={{cursor: "pointer"}}
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
  );
};

export default React.memo(MyModal);
