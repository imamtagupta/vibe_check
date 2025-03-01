import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Questionnaire from './Questionnaire';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeOff from './SeeOff';
import { useState } from 'react';


function App() {

  const [score, setScore] = useState(0);

  const scoreOff = (newScore) => {
    setScore(newScore)
    console.log("LOGGING FROM Base", newScore, score);
    
  }


  return (
    <div className="App">
      <h3 >Vibe Check</h3>
      <BrowserRouter>
      <Routes>
          {/* Correct way to define routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<Questionnaire scoreOff={scoreOff} />} />
          <Route path="/fact" element={<SeeOff score={score}/>} />
        </Routes>
    </BrowserRouter>
      <h3 >Copyright @2025</h3>
    </div>
  );
}

export default App;
