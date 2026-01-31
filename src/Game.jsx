import { useEffect, useState } from "react";
import "./MazeGame.css";
import "../public/girl.png"

const maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1],
  [1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
  [1,0,1,1,1,1,1,0,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,0,1,0,1,1,1,0,1,1,1,0,1,0,1],
  [1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,1,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const finish = { x: 13, y: 13 };

export default function MazeGame() {
  const [player, setPlayer] = useState({ x: 1, y: 1 });
  const [won, setWon] = useState(false);

  // választható: "girl" vagy "boy"
  const [goalType] = useState("girl");

  const movePlayer = (dx, dy) => {
    if (won) return;

    const nx = player.x + dx;
    const ny = player.y + dy;

    if (maze[ny][nx] === 0) {
      setPlayer({ x: nx, y: ny });
      if (nx === finish.x && ny === finish.y) setWon(true);
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
  }, [player, won]);

  return (
    <div className="frame">
      <div className="game">
        {won && (
          <div className="win">
            Can i be your valentine?
            <button onClick={() => {
              setPlayer({ x: 1, y: 1 });
              setWon(false);
            }}>
              <p style={{
                marginTop:"10px"
              }}>Yes (there is no other option)</p>
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
                className={`cell ${
                  x === finish.x && y === finish.y
                    ? "finish"
                    : cell === 1
                    ? "wall"
                    : player.x === x && player.y === y
                    ? "player"
                    : "path"
                }`}
              >
                {x === finish.x && y === finish.y && (
                  <img
                    src={goalType === "girl" ? "girl.png" : "boy.png"}
                    alt="goal"
                    className="goal-img"
                  />
                )}
              </div>
            ))
          )}
        </div>

        <div className="controls">

          <div>
            <button onClick={() => movePlayer(-1, 0)}>⬅</button>
                      <button onClick={() => movePlayer(0, -1)}>⬆</button>
            <button onClick={() => movePlayer(0, 1)}>⬇</button>
            <button onClick={() => movePlayer(1, 0)}>➡</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
