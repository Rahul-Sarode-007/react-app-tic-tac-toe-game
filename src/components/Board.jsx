import React from "react";

export default function Board({ squares, handleClick, isXNext }) {
  const renderSquare = (i) => {
    return (
      <button onClick={() => handleClick(i)} key={i} className="square"
      // className={!isXNext?"sign-classX":"sign-classO"}
      >
        {squares[i]}
      </button>
    );
  };

  const renderRow = (start) => {
    const row = [];
    for (let i = start; i < start + 3; i++) {
      row.push(renderSquare(i));
    }
    return (
      <div className="board-row" key={start}>
        {row}
      </div>
    );
  };

  const boardRows = [];
  for (let i = 0; i < 9; i += 3) {
    boardRows.push(renderRow(i));
  }

  return <>{boardRows}</>;
}
