import React, { useContext } from "react";
import { CharacterContext } from "./Room";

function Bed() {
  const charContext = useContext(CharacterContext);
  return (
    <div
      id="bed"
      style={{
        border: "2px solid black",
        height: "60vh",
        width: "40vh",
        margin: "5px",
        cursor: "pointer",
        /* display: "flex",
        textAlign: "center",
        justifyContent: "center", */
      }}
      onClick={() => charContext.charDispatch("sleep")}
    >
      <div
        id="pillow"
        style={{
          border: "1px solid black",
          position: "relative",
          height: "15%",
          width: "90%",
          margin: "10px",
        }}
      ></div>
      <div
        id="blanket"
        style={{
          border: "1px solid black",
          position: "relative",
          height: "75%",
          width: "93%",
          margin: "7px",
          //position: "relative",
        }}
      ></div>
    </div>
  );
}

export default Bed;
