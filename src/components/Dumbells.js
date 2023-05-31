import React, { useContext } from "react";
import { CharacterContext } from "./Room";

function Dumbells() {
  const charContext = useContext(CharacterContext);
  return (
    <div
      id="dumbellsRack"
      style={{
        height: "15vh",
        width: "98%",
        margin: "5px",
        position: "relative",
        top: "3vh",
        cursor: "pointer",
      }}
      onClick={() => charContext.charDispatch("exercise")}
    >
      <img
        src={process.env.PUBLIC_URL + "/images/dumbellsRack.png"}
        alt="dumbells rack"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          position: "absolute",
          right: "0",
        }}
      />
    </div>
  );
}

export default Dumbells;