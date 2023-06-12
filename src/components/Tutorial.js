import React from "react";

function Tutorial() {
  return (
    <>
      <div
        className="modal fade"
        id="turorialBackdrop"
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
                Tutorial- The Story
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Welcome to "JobHunt!"
                <br /> <br />
                You are a graduate who just got his degree,
                <br /> and now looking for his very first job!
                <br /> <br />
                Unfortunately, you find it very hard and frustrating,
                <br /> but you are on about to quit right now!
                <br />
                <br />
                The purpose of the game is to find the best job
                <br />
                as soon as possible.
                <br />
                <br />
                You have a 4 characteristics that will determine your success,
                <br />
                each affected by the actions you take.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-target="#turorialTwoBackdrop"
                data-bs-toggle="modal"
                //data-bs-dismiss="modal"
                //onClick={handleConfirmJob}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="turorialTwoBackdrop"
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
                Tutorial- Characteristics:
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <b>Energy:</b> Some actions will need a minimum energy value
              (studying, sending CV, exercising),
              <br />
              and some will regenerate it (sleeping and playing games).
              <br />
              <br />
              <b>Prof.:</b> Proffessionalism, needed to pass interviews. <br />
              <br />
              <b>Motivation:</b> Similar to energy, but affected differently.
              <br />
              <br />
              <b>Luck:</b> Needed to have a chance of getting an interview.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-target="#turorialBackdrop"
                data-bs-toggle="modal"
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-target="#turorialThreeBackdrop"
                data-bs-toggle="modal"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="turorialThreeBackdrop"
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
                Tutorial- Conclusion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              To <b>pass the interview</b>, you will need high{" "}
              <b>Prof., Motivation and Energy</b>, depending on the <b>level</b>{" "}
              of the interview.
              <br />
              <br />
              So study and send CV but don't forget to sleep, exercise and play
              some games <br />
              cause you don't want to drain your energy or be unmotivated! ;)
              <br />
              <br />
              <b>
                <em>Goodluck!</em>
              </b>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-target="#turorialTwoBackdrop"
                data-bs-toggle="modal"
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Resume the game!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tutorial;
