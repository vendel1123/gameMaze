import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import './App.css'

function App() {

  const navigate = useNavigate()
  return (
    <>
      <div className='rules'>

        <img src="rose.png" alt="" />
        <h1 style={{
          color: "red",
          fontSize: "15px"
        }}>Game details</h1>

        <p>
          Reach the end of the game to get your reward!
        </p>
        
        <p>
          <strong style={{ fontWeight: "bold" }}>Reward:</strong> U will be my valentines day
        </p>

        <p style={{ fontWeight: "bold" }}>
          How to play:
          </p>
        <p>Use the arrow keys </p>

        <button onClick={() => navigate("/game")}>
          Start game
        </button>
      </div>
    </>
  )
}

export default App
