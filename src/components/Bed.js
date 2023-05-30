import React from "react";

function Bed() {
  return (
    <div
      id="bed"
      style={{
        border: "1px solid black",
        height: "30vh",
        width: "10vh",
        margin: "5px",
        /* display: "flex",
        textAlign: "center",
        justifyContent: "center", */
      }}
    >
      <div
        id="pillow"
        style={{
          border: "1px solid black",
          height: "4vh",
          width: "7vh",
          margin: "10px",
          fontSize: "13px",
        }}
      >
        bed
      </div>
      <div
        id="blanket"
        style={{
          border: "1px solid black",
          height: "20vh",
          width: "8vh",
          margin: "7px",
          //position: "relative",
        }}
      ></div>
    </div>
  );
}

export default Bed;
