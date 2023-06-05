import React, { useContext } from "react";
import { CharacterContext } from "./Room";

function beginner(proff, mot, energy) {}

function generateInterviewResults(level, proff, mot, energy) {
  /** the formula:
   * proff: most important. 80 - 90 - 95
   * mot: second importance. 50 - 75 - 90
   * ener: least important. 50 - 70 - 80
   * but:
   * beg: 70 - 90 - 55
   * inter: 85 - 90 - 75
   * expe: 90 - 100 - 90
   */
  switch (level) {
    case "beginner":
      if (
        (proff >= 80 && mot >= 50 && energy >= 50) ||
        (proff >= 70 && mot >= 90 && energy >= 55)
      )
        return true;
      else return false;
    case "intermediate":
      if (
        (proff >= 90 && mot >= 75 && energy >= 70) ||
        (proff >= 85 && mot >= 90 && energy >= 75)
      )
        return true;
      else return false;
    case "expert":
      if (
        (proff >= 95 && mot >= 90 && energy >= 80) ||
        (proff >= 90 && mot >= 100 && energy >= 90)
      )
        return true;
      else return false;
    default:
      return false;
  }
}

function Interview(props) {
  const charContext = useContext(CharacterContext);
  let characteristics = charContext.charState;
  let day = charContext.charState.day;
  let level = "";
  switch (charContext.charState.interviews[day]) {
    case "beginner: 16,000 a month":
      level = "beginner";
      break;
    case "intermediate: 19,000 a month":
      level = "intermediate";
      break;
    case "expert: 25,000 a month":
      level = "expert";
      break;
    default:
      level = "something went wrong on the interview day";
      break;
  }
  const success = generateInterviewResults(
    level,
    characteristics.professionalism,
    characteristics.motivation,
    characteristics.energy
  );

  const interviewCleanup = () => {
    props.interviewDay(false);
    console.log("interviewCleanup");
    if (!success)
      charContext.charDispatch({ type: "failed job", value: level });
  };

  return (
    <>
      <div
        className="modal fade"
        id="interviewBackdrop"
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
                Welcome to your interview!
              </h1>
            </div>
            <div className="modal-body">
              You have a job interview level {level}, good luck!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-target="#interviewResultsBackdrop"
                data-bs-toggle="modal"
                //data-bs-dismiss="modal"
                //onClick={handleConfirmJob}
              >
                Take the Interview
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="interviewResultsBackdrop"
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
                {success
                  ? "Congratulations! You finished the game! :)"
                  : 'Unfortunately, they prefered "other candidates" :('}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={interviewCleanup}
              ></button>
            </div>
            <div className="modal-body">
              {success
                ? `It took you ${day} days, and you got the job on level ${level}, nice!\n So... whats now? :O`
                : "As always, they did not tell you why, so your motivation took a hit.\n At least you learned some new things!"}
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Interview);
