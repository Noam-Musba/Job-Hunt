import React from "react";

function JobOpportunity() {
  let inDays = (Math.random().toFixed(2) * 100) % 4;
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
              You got a job interview! Level:
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            You have a job interview level {} in {inDays} days!
            <br />
            Do you choose to proceed?
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
