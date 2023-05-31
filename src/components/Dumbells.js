import React from 'react'

function Dumbells() {
  return (
    <div id="dumbellsRack" style={{
      height: "15vh",
      width: "25vw",
      margin: "5px",
      position: "relative",
      left: "55%",
      top: "-5vh"
    }}>
      <img src={process.env.PUBLIC_URL + '/images/dumbellsRack.png'} alt='dumbells rack'
      style={{
        maxHeight: "100%",
        maxWidth: "100%"
      }} />
    </div>
  )
}

export default Dumbells