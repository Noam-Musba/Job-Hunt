import React, { useEffect, useReducer, useState } from "react";
import Bed from "./Bed";
import Computer from "./Computer";
import Dumbells from "./Dumbells";
import JobOpportunity from "./JobOpportunity";
import Interview from "./Interview";
import ShowInterviews from "./ShowInterviews";
import Tutorial from "./Tutorial";

export const CharacterContext = React.createContext();

const initCharacter = {
  day: 1,
  time: 0,
  motivation: 100,
  professionalism: 5,
  energy: 100,
  luck: 0,
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

function addJobHandler(state, days, level) {
  console.log("addjobhandler");
  const date = days + state.day;
  state.interviews[date] = level;
  console.log(state.interviews);
  return state;
}

function failedJobHandler(state, level) {
  console.log("failedJobHandler");
  console.log(`the level is ${level}`);
  let prof, mot, energy, tmpInter;
  switch (level) {
    case "beginner":
      prof = 10;
      break;
    case "intermediate":
      prof = 7;
      break;
    case "expert":
      prof = 5;
      break;
    default:
      console.error(
        "failedJobHandler bug, should get to default in switch case"
      );
      break;
  }
  mot = 30;
  energy = 30;
  tmpInter = state.interviews;
  delete tmpInter[state.day];
  return {
    day: state.day,
    time: state.time,
    motivation: Math.max(state.motivation - mot, 0),
    professionalism: Math.min(state.professionalism + prof, 100),
    energy: Math.max(state.energy - energy, 0),
    luck: state.luck,
    interviews: tmpInter,
  };
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
    case "failed job":
      console.log("reducer in failed job");
      return failedJobHandler(state, action.value);
    default:
      //console.log("default");
      return state;
  }
};

function Room() {
  const [character, dispatch] = useReducer(reducer, initCharacter);
  const [jobInterview, setJobInterview] = useState(false);
  const [interviewDay, setInterviewDay] = useState(false);

  let roomColor1, roomColor2;
  switch (character.time) {
    case 0:
      roomColor1 = "lightskyblue";
      roomColor2 = "#8486f5"; //"#5f29f6";
      break;
    case 1:
      roomColor1 = "lightyellow";
      roomColor2 = "yellow";
      break;
    case 2:
      roomColor1 = "lightgray";
      roomColor2 = "gray";
    default:
      break;
  }

  useEffect(() => {
    // console.log("useeffect")
    let luck = character.luck / 100;
    let randomNumber = Math.random().toFixed(2);
    if (luck >= randomNumber) {
      // console.log("true");
      setJobInterview(true);
    }
    // else console.log("false")
    if (character.interviews[character.day] !== undefined) {
      setInterviewDay(true);
    } else {
      setInterviewDay(false);
    }
    return () => {
      // console.log("cleanup");
      setJobInterview(false);
      setInterviewDay(false);
    };
  }, [character.day, character.interviews, character.luck]);

  return (
    <div
      id="gamebox"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        overflow: "",
      }}
    >
      <ShowInterviews interviews={character.interviews} />
      <span
        style={{
          position: "fixed",
          marginTop: "7px",
        }}
      >
        Day:{character.day}&nbsp;&nbsp; Time:{" "}
        {character.time === 0
          ? "morning"
          : character.time === 1
          ? "noon"
          : "night"}
        &nbsp;&nbsp; Energy: {character.energy}&nbsp;&nbsp; Prof.:{" "}
        {character.professionalism}&nbsp;&nbsp; Motivation:{" "}
        {character.motivation}
        &nbsp;&nbsp; Luck: {character.luck}
      </span>
      <CharacterContext.Provider
        value={{ charState: character, charDispatch: dispatch }}
      >
        {interviewDay && <Interview interviewDay={setInterviewDay} />}
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
          data-bs-toggle={interviewDay ? "modal" : ""}
          data-bs-target="#interviewBackdrop"
        >
          {jobInterview && <JobOpportunity jobOpportunity={setJobInterview} />}

          <div
            id="floor"
            style={{
              background: `radial-gradient(${roomColor1}, ${roomColor2})`,
              //backgroundColor: `${roomColor1}`,
              height: "90%",
              width: "90%",
              border: "1px solid black",
              boxShadow: "0 0 10px rgba(237, 233, 157, 1)", //yellow
              overflowX: "auto",
              //transition: "background-color 4s ease"
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
              <button
                type="button"
                class="btn btn-info"
                data-bs-toggle="modal"
                data-bs-target="#turorialBackdrop"
                style={{
                  maxHeight: "5vh",
                  position: "relative",
                  top: "230px",
                  left: "170px",
                }}
              >
                Tutorial
              </button>
              <Tutorial />
            </div>
            <Dumbells />
          </div>
        </div>
      </CharacterContext.Provider>
    </div>
  );
}

export default React.memo(Room);
