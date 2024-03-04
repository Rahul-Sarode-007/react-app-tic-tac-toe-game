import React, { useState } from "react";

export default function App({ setPlayer1, setPlayer2 }) {
  const [showModal, setShowModal] = useState(true);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handleStartGame = () => {
    if (!player1Name || !player2Name) {
        alert("Please enter names for both players!");
        return;
      }
    setPlayer1(player1Name);
    setPlayer2(player2Name);
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <h2>Enter Player's Name</h2>
          <label htmlFor="player1">Player 1</label>
          <input
            autoComplete="off"
            type="text"
            id="player1"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />

          <label htmlFor="player2">Player 2</label>
          <input
            autoComplete="off"
            type="text"
            id="player2"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <br></br>
          <button onClick={handleStartGame}>Play Now</button>
        </div>
      )}
    </div>
  );
}
