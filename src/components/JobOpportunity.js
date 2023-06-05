import React, { useContext } from "react";
import { CharacterContext } from "./Room";

function JobOpportunity(props) {
  const charContext = useContext(CharacterContext);

  let days = Math.round(((Math.random().toFixed(2) * 100) % 4) + 1);

  let level = "";
  let levelNumber = Math.random().toFixed(2);
  if (levelNumber <= 0.65) level = "beginner: 16,000 a month";
  else if (levelNumber <= 0.9) level = "intermediate: 19,000 a month";
  else level = "expert: 25,000 a month";

  const handleConfirmJob = () => {
    //need use context
    console.log("confirm job");
    props.jobOpportunity(false);
    charContext.charDispatch({ type: "add job", day: days, value: level });
  };
  const handleRejectJob = () => {
    console.log("reject job");
    props.jobOpportunity(false);
  };
  return (
    <div
      className="modal fade"
      id="jobBackdrop"
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
              You got a job interview! Level: {level}
            </h1>
          </div>
          <div className="modal-body">
            You have a job interview in {days} days!
            <br />
            Do you want to proceed? <br />
            {charContext.charState.interviews[
              days + charContext.charState.day
            ] &&
              `Note: You already have a job interview: ${
                charContext.charState.interviews[
                  days + charContext.charState.day
                ]
              }. Clicking "Yes" will overwrite!`}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={handleConfirmJob}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleRejectJob}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOpportunity;
