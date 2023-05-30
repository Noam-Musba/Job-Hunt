import React from "react";
import Bed from "./Bed";

const roomStyle = {};

function Room() {
  return (
    <div id="gamebox"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div id="walls"
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
        <div id="floor"
          style={{
            backgroundColor: "white",
            height: "90%",
            width: "90%",
            border: "1px solid black",
          }}
        >
          <Bed />
        </div>
      </div>
    </div>
  );
}

export default Room;
