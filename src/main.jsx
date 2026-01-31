import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import Home from './Home.jsx'
import Game from './Game.jsx';

createRoot(document.getElementById('root')).render(
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/app' element={<App/>}/>
      <Route path='/game' element={<Game/>}/>
    </Routes>
    </HashRouter>,

)
