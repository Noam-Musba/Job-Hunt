import React from "react";

const roomStyle = {};

function Room() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          backgroundColor: "lightgrey",
          height: "80vh",
          width: "70vw",
          position: "absolute",
          top: "10%",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            height: "90%",
            width: "90%",
            border: "1px solid black",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Room;
