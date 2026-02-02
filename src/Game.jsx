import { useEffect, useState } from "react";
import "./MazeGame.css";
import "../public/girl.png";

const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const finish = { x: 13, y: 13 };

export default function MazeGame() {
  const [player, setPlayer] = useState({ x: 1, y: 1 });
  const [won, setWon] = useState(false);
  const [obstacleOpen, setObstacleOpen] = useState(false);

  const movePlayer = (dx, dy) => {
    if (won) return;

    const nx = player.x + dx;
    const ny = player.y + dy;
    const cell = maze[ny][nx];

    if (cell === 1) return;

    if (cell === 2 && !obstacleOpen) {
      alert("Ebből az irányból nem tudsz eljutti a célba.");
      return;
    }

    setPlayer({ x: nx, y: ny });

    if (nx === finish.x && ny === finish.y) {
      setWon(true);
    }
  };

  useEffect(() => {
    const key = (e) => {
      if (e.key === "ArrowUp") movePlayer(0, -1);
      if (e.key === "ArrowDown") movePlayer(0, 1);
      if (e.key === "ArrowLeft") movePlayer(-1, 0);
      if (e.key === "ArrowRight") movePlayer(1, 0);
    };

    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [player, won, obstacleOpen]);

  return (
    <div className="frame">
      <div className="game">

        {won && (
          <div className="win">
            <div className="win-message">
              <img src="rosee.png" alt="left" className="side-img" />
               <span>Will u be my <strong style={{
                color:"#FDACAC"
               }}>valentine</strong>?</span>
              <img src="rosee.png" alt="right" className="side-img" />
            </div>
            <button
              onClick={() => {
                setPlayer({ x: 1, y: 1 });
                setWon(false);
                setObstacleOpen(false);
              }}
              style={{
                width:"80%",
                borderRadius:"7px",
                marginTop:"5px",
                padding:"5px",
              }}
            >
              Yes (there is no other option)
            </button>
          </div>
        )}

        <div
          className="maze"
          style={{
            gridTemplateColumns: `repeat(${maze[0].length}, var(--cell))`,
          }}
        >
          {maze.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${x}-${y}`}
                className={`cell ${x === finish.x && y === finish.y
                    ? "finish"
                    : cell === 1
                      ? "wall"
                      : cell === 2
                        ? "obstacle"
                        : player.x === x && player.y === y
                          ? "player"
                          : "path"
                  }`}
              >
                {x === finish.x && y === finish.y && (
                  <img
                    src="girl.png"
                    alt="goal"
                    className="goal-img"
                  />
                )}
              </div>
            ))
          )}
        </div>

        <div className="controls">
          <button onClick={() => movePlayer(-1, 0)}>⬅</button>
          <button onClick={() => movePlayer(0, -1)}>⬆</button>
          <button onClick={() => movePlayer(0, 1)}>⬇</button>
          <button onClick={() => movePlayer(1, 0)}>➡</button>
        </div>

      </div>
    </div>
  );
}
