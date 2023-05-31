import React from "react";

function Computer() {
  return (
    <div
      id="desk"
      style={{
        border: "1px solid black",
        height: "15vh",
        width: "25vw",
        margin: "5px",
        position: "relative",
        left: "27%",
      }}
    >
      <div
        id="computer"
        style={{
          border: "1px solid black",
          height: "30%",
          width: "70%",
          margin: "5px",
        }}
      >
        <div
          id="monitor"
          style={{
            height: "30%",
            width: "100%",
            marginTop: "23px",
            backgroundColor: "black", // will change color if working or not
          }}
        ></div>
      </div>
      <div
        id="keyboard"
        style={{
          border: "1px solid black",
          height: "30%",
          width: "70%",
          margin: "5px",
          borderRadius: "10px",
        }}
      />
      <div 
      id="mouse"
      style={{
        border: "1px solid black",
        borderRadius: "40%",
        width: "8px",
        height: "15px",
        position: "relative",
        left: "19vw"
      }}
      />
    </div>
  );
}

export default Computer;
