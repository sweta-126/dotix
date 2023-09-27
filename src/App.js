import React, { useState } from 'react'
import Start from './pages/Start';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import LeaderBoard from './pages/LeaderBoard';

const App = () => {
  const [userName, setUserName] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Start setUserName={setUserName} />} />
        <Route exact path='/home' element={<Home userName={userName} />} />
        <Route exact path='/quiz/:category' element={<Quiz/>} />
        <Route exact path='/score' element={<Score/>} />
        <Route exact path='/leaderboard' element={<LeaderBoard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
