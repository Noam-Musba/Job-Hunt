import React from "react";

function JobOpportunity() {
  let inDays = ((Math.random().toFixed(2) * 100) % 4) + 1;
  let levelNumber = (Math.random().toFixed(2));
  let level = "";
  if(levelNumber <= 0.65) level = "beginner: 16,000 a month";
  else if (levelNumber <= 0.9) level = "intermediate: 19,000 a month";
  else level = "expert: 25,000 a month";
  const handleConfirmJob = () => {};
  const handleRejectJob = () => {};
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
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            You have a job interview level {level}, in {inDays} days!
            <br />
            Do you want to proceed?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleConfirmJob}
            >
              Yes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
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

export default React.memo(JobOpportunity);
