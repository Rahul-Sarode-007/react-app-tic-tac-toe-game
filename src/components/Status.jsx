import React from "react";

export default function Status({
  calculateWinner,
  squares,
  isXNext,
  player,
  setWinnerName,
  winnerName,
}) {
  const status = calculateWinner(squares);
  let statusMessage = "";
  let statusClass = "";

  if (
    squares.every((square) => square !== null) &&
    status !== "X" &&
    status !== "O"
  ) {
    statusMessage = "It's a draw!";
    statusClass = "draw";
  } else if (status === null) {
    let name = isXNext ? player.player1 : player.player2;
    statusMessage = `Next is : ${name}`;
    setWinnerName(name);
  } else {
    statusMessage = `Winner is ${winnerName} 🥳`;
    statusClass = "winner";
  }

  return <h1 className={`${statusClass} game-info`}>{statusMessage}</h1>;
}
