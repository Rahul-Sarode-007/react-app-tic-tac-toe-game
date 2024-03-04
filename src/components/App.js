import React, { useState } from "react";
import StartGame from "./StartGame";
import Board from "./Board";
import Status from "./Status";
import ScoreBoard from "./ScoreBoard";
import ResetButton from "./ResetButton";
import { calculateWinner } from "./winner function";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  let [score1, setScore1] = useState(0);
  let [score2, setScore2] = useState(0);

  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [signX, setSignX] = useState("X");
  const [signO, setSignO] = useState("O");

  const [a, setA] = useState("X");
  const [b, setB] = useState("O");
  // eslint-disable-next-line
  const [c, setC] = useState("");

  const [statusPlayer, setStatusPlayer] = useState(true);
  const [winnerName, setWinnerName] = useState("");

  const handleSwapSign = (sign) => {
    if (sign === a) {
      setSignX("X");
      setSignO("O");
      setScore1(score1 + 1);
      if (sign === "O") {
        // c = a  //O
        setC(a);
        // a = b  //X
        setA(b);
        // b = c  //O
        setB(a);
      }
    }
    if (sign === b) {
      setSignX("O");
      setSignO("X");
      setScore2(score2 + 1);
      if (sign === "O") {
        // c = a  //O
        setC(a);
        // a = b  //X
        setA(b);
        // b = c  //O
        setB(a);
      }
    }
  };

  function handleClick(i) {
    //Returning early, if square is already click or game over.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    //Creating new copy of "Squares" array and updating new "nextSquares" array.
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    //Updating score state if winner found.
    const winner = calculateWinner(nextSquares);
    if (winner) {
      if (winner === "X") {
        handleSwapSign("X");
      }
      if (winner === "O") {
        handleSwapSign("O");
        setStatusPlayer(!statusPlayer);
      }
    }

    //Updating states with new and updated copy of array "nextSquare".
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  return (
   
    <div  className={`outter-container`}>
      <StartGame setPlayer1={setPlayer1} setPlayer2={setPlayer2}/>

      <img className="title" src="./images/Tic tac toe logo.png" alt=""></img>

      <div className={`container ${ player2? "modal-close" : ""}`}>
        <ScoreBoard score={score1} id={player1} sign={signX} />
        <div className="game">
          <Status
            calculateWinner={calculateWinner}
            squares={squares}
            isXNext={isXNext}
            player={
              statusPlayer
                ? { player1, player2 }
                : { player1: player2, player2: player1 }
            }
            setWinnerName={setWinnerName}
            winnerName={winnerName}
          />
          <Board
            squares={squares}
            handleClick={handleClick}
            isXNext={isXNext}
          />
          <ResetButton setSquares={setSquares} setIsXNext={setIsXNext} />
        </div>
        <ScoreBoard score={score2} id={player2} sign={signO} />
      </div>
      <p className="copyright">Rahul Sarode © 2024</p>
    </div>
  );
}
