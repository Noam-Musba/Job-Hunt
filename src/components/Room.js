import React from "react";
import Bed from "./Bed";
import Computer from "./Computer";

const roomStyle = {};

function Room() {
  return (
    <div
      id="gamebox"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        id="walls"
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
          id="floor"
          style={{
            backgroundColor: "white",
            height: "90%",
            width: "90%",
            border: "1px solid black",
            boxShadow: "0 0 10px rgba(237, 233, 157, 1)", //yellow
          }}
        >
          <div style={{
            display: "flex",
            overflow: "hidden"
          }}>
            <Bed />
            <Computer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
