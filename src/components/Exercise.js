import React from "react";
import ConfirmAct from "./ConfirmAct";

const dumbbells = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "19vh",
  position: "relative",
  left: "40vw",
  cursor: "pointer",
};

const dumbbell = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px",
};

const barSmall = {
  width: "10px",
  height: "30px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

const barMed = {
  width: "12px",
  height: "40px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

const barBig = {
  width: "20px",
  height: "50px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

const bellTopSmall = {
  width: "20px",
  height: "20px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginBottom: "-5px",
};

const bellTopMed = {
  width: "27px",
  height: "27px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginBottom: "-5px",
};

const bellTopBig = {
  width: "40px",
  height: "40px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginBottom: "-5px",
};

const bellBotSmall = {
  width: "20px",
  height: "20px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginTop: "-5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

const bellBotMed = {
  width: "27px",
  height: "27px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginTop: "-5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

const bellBotBig = {
  width: "40px",
  height: "40px",
  background: "linear-gradient(gray, darkslategrey)",
  borderRadius: "50%",
  marginTop: "-5px",
  boxShadow: "1px 1px 10px darkslategrey",
};

function Exercise() {
  return (
    <>
      <ConfirmAct type={"dumb"}>exercise</ConfirmAct>
      <div
        id="dumbellsRack"
        style={dumbbells}
        title="Exercise"
        data-bs-toggle="modal"
        data-bs-target="#confirmExerciseBackdrop"
        data-bs-whatever="@dumbells"
      >
        <div style={dumbbell}>
          <div style={bellTopSmall}></div>
          <div style={barSmall}></div>
          <div style={bellBotSmall}></div>
        </div>
        <div style={dumbbell}>
          <div style={bellTopSmall}></div>
          <div style={barSmall}></div>
          <div style={bellBotSmall}></div>
        </div>
        <div style={dumbbell}>
          <div style={bellTopMed}></div>
          <div style={barMed}></div>
          <div style={bellBotMed}></div>
        </div>
        <div style={dumbbell}>
          <div style={bellTopMed}></div>
          <div style={barMed}></div>
          <div style={bellBotMed}></div>
        </div>
        <div style={dumbbell}>
          <div style={bellTopBig}></div>
          <div style={barBig}></div>
          <div style={bellBotBig}></div>
        </div>
        <div style={dumbbell}>
          <div style={bellTopBig}></div>
          <div style={barBig}></div>
          <div style={bellBotBig}></div>
        </div>
      </div>
    </>
  );
}

export default Exercise;
