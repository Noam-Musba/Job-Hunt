import React, { useState } from "react";
import MyModal from "./MyModal";

function Computer() {
  //const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => {
  //   console.log("open");
  //   setShowModal(true);
  // };

  return (
    <>
      <MyModal />
      <div
        id="desk"
        style={{
          //border: "1px solid black",
          height: "15vh",
          width: "25vw",
          margin: "5px",
          position: "relative",
          left: "27%",
          cursor: "pointer",
          backgroundColor: "#e58b40"//e58b40
        }}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        title="Study, Send CV or some Gaming"
        // onClick={handleOpenModal}
      >
        <div
          id="computer"
          style={{
            border: "1px solid black",
            height: "30%",
            width: "70%",
            margin: "5px",
            backgroundColor: "black",
            borderRadius: "20%"
          }}
        >
          <div
            id="monitor"
            style={{
              height: "20%",
              width: "100%",
              marginTop: "27px",
              backgroundColor: "blue", // will change color if working or not
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
            background: "repeating-linear-gradient(white, black 5px)"
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
            left: "19vw",
            background: "conic-gradient(white, black)"
          }}
        />
      </div>
    </>
  );
}

export default React.memo(Computer);
