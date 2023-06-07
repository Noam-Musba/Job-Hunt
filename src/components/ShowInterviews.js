import React from "react";

function ShowInterviews(props) {
  const interviewsList = Object.entries(props.interviews).map(([day,level]) => (
    <li className="list-group-item" key={Math.random()} aria-current="true">
      {day}: {level}
    </li>
  ));
  return (
    <div
      style={{
        position: "relative",
        bottom: "-20vh",
        left: "-26vw",
      }}
    >
      <button
        className="btn btn-info"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Upcoming interviews
      </button>
      <div className="collapse" id="collapseExample" style={{ width: "12vw" }}>
        <div className="card card-body">
          <ul className="list-group list-group-flush">
            {interviewsList}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowInterviews;
