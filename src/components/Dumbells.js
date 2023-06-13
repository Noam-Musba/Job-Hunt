import React from "react";
import ConfirmAct from "./ConfirmAct";

function Dumbells() {
  //const charContext = useContext(CharacterContext);
  return (
    <>
      <ConfirmAct type={"dumb"}>exercise</ConfirmAct>
      <div
        id="dumbellsRack"
        style={{
          height: "15vh",
          width: "98%",
          margin: "5px",
          position: "relative",
          top: "3vh",
        }}
        title="Exercise"
      >
        <img
          src={process.env.PUBLIC_URL + "/images/dumbellsRack.png"}
          alt="dumbells rack"
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            position: "absolute",
            right: "0",
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#confirmExerciseBackdrop"
          data-bs-whatever="@dumbells"
          //onClick={() => charContext.charDispatch({type: "exercise"})}
        />
      </div>
    </>
  );
}

export default Dumbells;
