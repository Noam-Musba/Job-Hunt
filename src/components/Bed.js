import React from "react";
import ConfirmAct from "./ConfirmAct";

function Bed() {
  return (
    <>
    <ConfirmAct type={"bed"}>sleep</ConfirmAct>
    <div
      id="bed"
      style={{
        //border: "2px solid black",
        height: "60vh",
        width: "40vh",
        margin: "5px",
        cursor: "pointer",
        background: "radial-gradient(blue, navy)",
        boxShadow: "0 0 25px darkslategrey"
        /* display: "flex",
        textAlign: "center",
        justifyContent: "center", */
      }}
      data-bs-toggle="modal"
      data-bs-target="#confirmSleepBackdrop"
      data-bs-whatever="@bed"
      //onClick={() => charContext.charDispatch({ type: "sleep" })}
      title="Sleep"
    >
      <div
        id="pillow"
        style={{
          //border: "1px solid black",
          position: "relative",
          left: "15%",
          height: "15%",
          width: "60%",
          margin: "10px",
          borderRadius: "10%",
          background: "radial-gradient(limegreen, lightgreen)",
        }}
      ></div>
      <div
        id="blanket"
        style={{
          //border: "1px solid black",
          position: "relative",
          height: "75%",
          width: "93%",
          margin: "7px",
          background: "linear-gradient(to right, limegreen, lightgreen)",
          borderRadius: "6%"
          //position: "relative",
        }}
      ></div>
    </div>
    </>
  );
}

export default Bed;
