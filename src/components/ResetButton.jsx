import React from "react";

export default function ResetButton({setSquares,setIsXNext }) {

  function onResetClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
    return (
      <>
        <button onClick={onResetClick} className="reset">
          Reset
        </button>
      </>
    );
  }