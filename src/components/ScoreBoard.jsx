import React from "react";

export default function ScoreBoard({ score, id, sign }) {


  return (
    <>
      <div className={`score-borad-${id} player-scoreborad`}>
        <h1 className={sign === "X" ? "sign-classX" : "sign-classO"}>{id}</h1>
        <h2>
          Symbol:{" "}
          <span className={sign === "X" ? "sign-classX" : "sign-classO"}>
            {sign}
          </span>{" "}
          <span className="pipeSymbol">|</span> Score: {score}
        </h2>
        <div className="game-info-line"></div>
      </div>
    </>
  );
}
