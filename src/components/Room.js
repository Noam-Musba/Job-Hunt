import React, { useEffect, useReducer, useState } from "react";
import Bed from "./Bed";
import Computer from "./Computer";
import Dumbells from "./Dumbells";
import JobOpportunity from "./JobOpportunity";

export const CharacterContext = React.createContext();

const initCharacter = {
  day: 1,
  time: 0,
  motivation: 100,
  professionalism: 0,
  energy: 100,
  luck: 80,
  interviews: {},
};

function studyHandler(state) {
  if (state.energy < 30) {
    return "energy";
  } else if (state.motivation < 10) {
    return "motivation";
  } else {
    return {
      day: state.time === 2 ? state.day + 1 : state.day,
      time: (state.time + 1) % 3,
      motivation: Math.max(state.motivation - 10, 0),
      professionalism: Math.min(
        state.professionalism + (state.motivation > 50 ? 15 : 5),
        100
      ),
      energy: Math.max(state.energy - 30, 0),
      luck: Math.max(state.luck - (state.time === 2 ? 5 : 0), 0),
      interviews: state.interviews,
    };
  }
}

function sendCVHandler(state) {
  if (state.energy < 25) {
    return "energy";
  } else if (
    (state.professionalism > 50 && state.motivation < 20) ||
    (state.professionalism <= 50 && state.motivation < 30)
  ) {
    return "motivation";
  } else {
    return {
      day: state.time === 2 ? state.day + 1 : state.day,
      time: (state.time + 1) % 3,
      motivation: Math.max(
        state.motivation - (state.professionalism > 50 ? 15 : 30),
        0
      ),
      professionalism: Math.max(state.professionalism - 2, 0),
      energy: Math.max(state.energy - 25, 0),
      luck: Math.max(state.luck + (state.time === 2 ? 0 : 5), 0),
      interviews: state.interviews,
    };
  }
}

function gameHandler(state) {
  return {
    day: state.time === 2 ? state.day + 1 : state.day,
    day: state.day,
    time: (state.time + 1) % 3,
    motivation: Math.min(state.motivation + 10, 100),
    professionalism: Math.max(
      state.professionalism - (state.professionalism > 50 ? 5 : 10),
      0
    ),
    energy: Math.min(state.energy + 10, 100),
    luck: Math.max(state.luck - (state.time === 2 ? 5 : 0), 0),
    interviews: state.interviews,
  };
}

function exerciseHandler(state) {
  if (state.energy < 15) {
    return "energy";
  } else {
    return {
      day: state.time === 2 ? state.day + 1 : state.day,
      day: state.day,
      time: (state.time + 1) % 3,
      motivation: Math.min(state.motivation + 20, 100),
      professionalism: Math.max(
        state.professionalism - (state.professionalism > 50 ? 5 : 15),
        0
      ),
      energy: Math.max(state.energy - 15, 0),
      luck: Math.max(state.luck - (state.time === 2 ? 5 : 0), 0),
      interviews: state.interviews,
    };
  }
}

function sleepHandler(state) {
  return {
    day: state.time === 2 ? state.day + 1 : state.day,
    time: (state.time + 1) % 3,
    motivation: Math.min(state.motivation + (state.time === 2 ? 15 : 5), 100),
    professionalism: Math.max(
      state.professionalism - (state.time === 2 ? 5 : 0),
      0
    ),
    energy: Math.min(state.energy + (state.time === 2 ? 50 : 20), 100),
    luck: Math.max(state.luck - (state.time === 2 ? 5 : 0), 0),
    interviews: state.interviews,
  };
}

function addJobHandler(state, days, level){
  console.log("addjobhandler");
  const date = days + state.day;
  state.interviews[date] = level;
  console.log(state.interviews);
  return state;
}

const reducer = (state, action) => {
  //console.log("reducer");
  let ret = "";
  switch (action.type) {
    case "study":
      //console.log("study");
      ret = studyHandler(state);
      if (ret === "energy" || ret === "motivation") {
        alert(`Your ${ret} is too low!`);
        return state;
      } else return ret;
    case "send cv":
      //console.log("cv");
      ret = sendCVHandler(state);
      if (ret === "energy" || ret === "motivation") {
        alert(`Your ${ret} is too low!`);
        return state;
      } else return ret;
    case "game":
      //console.log("game");
      return gameHandler(state);
    case "exercise":
      //console.log("exc");
      ret = exerciseHandler(state);
      if (ret === "energy") {
        alert(`Your ${ret} is too low!`);
        return state;
      } else return ret;
    case "sleep":
      //console.log("sleep");
      return sleepHandler(state);
    case "add job":
      return addJobHandler(state, action.day, action.value);
    default:
      //console.log("default");
      return state;
  }
};

function Room() {
  const [character, dispatch] = useReducer(reducer, initCharacter);
  const [jobInterview, setJobInterview] = useState(false);
  const [interviewDay, setInterviewDay] = useState(false);

  useEffect(() => {
    // console.log("useeffect")
    let luck = character.luck / 100;
    let randomNumber = Math.random().toFixed(2);
    if (luck >= randomNumber) {
      // console.log("true");
      setJobInterview(true);
    } 
    // else console.log("false")
    if(character.interviews[character.day] != undefined){
      setInterviewDay(true);
    }
    else{
      setInterviewDay(false);
    }
    return () => {
      // console.log("cleanup");
      setJobInterview(false);
    }
  }, [character.day]);

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
      Day:{character.day}&nbsp;&nbsp; Time:{" "}
      {character.time === 0
        ? "morning"
        : character.time === 1
        ? "noon"
        : "night"}
      &nbsp;&nbsp; Energy: {character.energy}&nbsp;&nbsp; Prof.:{" "}
      {character.professionalism}&nbsp;&nbsp; Motivation: {character.motivation}
      &nbsp;&nbsp; Luck: {character.luck}
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
          {jobInterview && <JobOpportunity jobOpportunity={setJobInterview}/>}
          {/* {interviewDay && console.log("continue from here, line 213")} */}
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
            data-bs-toggle={jobInterview ? "modal" : ""}
            data-bs-target="#jobBackdrop"
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

export default React.memo(Room);
