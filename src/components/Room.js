import React, { useReducer } from "react";
import Bed from "./Bed";
import Computer from "./Computer";
import Dumbells from "./Dumbells";

export const CharacterContext = React.createContext();

const initCharacter = {
  time: 0,
  motivation: 100,
  professionalism: 0,
  energy: 100,
  luck: 1,
};

const reducer = (state, action) => {
  switch (action) {
    case "study":
      return {
        time: (state.time + 1) % 3,
        motivation: Math.max(state.motivation - 10, 0),
        professionalism: Math.min(
          state.professionalism + (state.motivation > 50 ? 10 : 5),
          100
        ),
        energy: Math.max(state.energy - 30, 0),
        luck: state.luck,
      };
    case "send cv":
      return {
        time: (state.time + 1) % 3,
        motivation: Math.max(
          state.motivation - (state.professionalism > 50 ? 10 : 20),
          0
        ),
        professionalism: state.professionalism,
        energy: Math.max(state.energy - 20, 0),
        luck: state.luck + 10,
      };
    case "game":
      return {
        time: (state.time + 1) % 3,
        motivation: Math.min(state.motivation + 10, 100),
        professionalism: Math.max(
          state.professionalism - (state.professionalism > 50 ? 5 : 10),
          0
        ),
        energy: Math.min(state.energy + 10, 100),
        luck: state.luck,
      };
    case "exercise":
      return {
        time: (state.time + 1) % 3,
        motivation: Math.min(state.motivation + 20, 100),
        professionalism: Math.max(
          state.professionalism - (state.professionalism > 50 ? 5 : 10),
          0
        ),
        energy: Math.max(state.energy - 10, 0),
        luck: state.luck,
      };
    case "sleep":
      return {
        time: (state.time + 1) % 3,
        motivation: Math.min(
          state.motivation + (state.time === 2 ? 15 : 5),
          100
        ),
        professionalism: Math.max(
          state.professionalism - (state.time === 2 ? 5 : 0),
          0
        ),
        energy: Math.min(state.energy + (state.time === 2 ? 50 : 20), 100),
        luck: Math.max(state.luck - (state.time === 2 ? 5 : 1), 0),
      };
    default:
      return state;
  }
};

function Room() {
  const [character, dispatch] = useReducer(reducer, initCharacter);
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
      Time: {character.time}&nbsp;&nbsp; Energy: {character.energy}&nbsp;&nbsp;
      Prof.: {character.professionalism}&nbsp;&nbsp; Motivation:{" "}
      {character.motivation}&nbsp;&nbsp; Luck: {character.luck}
      <div
        id="walls"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          backgroundColor: "lightgrey",
          height: "90vh",
          width: "70vw",
          position: "absolute",
          top: "7%",
        }}
      >
        <CharacterContext.Provider
          value={{ charState: character, charDispatch: dispatch }}
        >
          <div
            id="floor"
            style={{
              backgroundColor: "white",
              height: "90%",
              width: "90%",
              border: "1px solid black",
              boxShadow: "0 0 10px rgba(237, 233, 157, 1)", //yellow
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                //overflow: "hidden"
              }}
            >
              <Bed />
              <Computer />
            </div>
            <Dumbells />
          </div>
        </CharacterContext.Provider>
      </div>
    </div>
  );
}

export default Room;
