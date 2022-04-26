import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { PlayGame } from './PlayGame';
import { Waiting } from './Waiting';
import { ScorePage } from './scorePage';
import { SpecialSquare } from './SpecialSquare';
import { Win } from './Win';
import { Lose } from './Lose';
import { useState } from 'react';
import localforage from 'localforage';

const game1 = {
  start: "now"
  , end: "later"
  , win: true
  , gameTurns: [
    {
      turnNumber: 1
      , playerTurn: [
        {
          start: "now"
          , end: "little later"
          , word: "testing"
          , startingTotalScore: 0
          , endingTotalScore: 8
        }
      ]
    }
  ]
};

const game2 = {
  start: "now"
  , end: "later"
  , win: true
  , gameTurns: [
    {
      turnNumber: 1
      , playerTurn: [
        {
          start: "now"
          , end:"much later"
          , word: "penguin"
          , startingTotalScore: 0
          , endingTotalScore: 14
        }
      ]
    }
  ]
};

const gameResults = [
  game1
  , game2
];




const App = () => {

  const [results, setResults] = useState(gameResults);

  const [score, setScore] = useState("");

  const updateScore = async (newScore) => {
    setScore(await localforage.setItem('score', newScore));
  };

  const addGameResult = (gameResult) => {
    setResults([
      ...results
      , gameResult
    ]);
  };


  const [currentGame, setCurrentGame] = useState({
    start: ""

  });

  return (
    <>

    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home
            gameResults={gameResults}
            setCurrentGame={setCurrentGame}
          />
        } />

        <Route path="playgame" element={
          <PlayGame 
            addGameResult={addGameResult}
            currentGame={currentGame}
            score={score}
            updateScore={updateScore}
          />
          } />
        <Route path="waiting" element={
          <Waiting 
          score={score}
          updateScore={updateScore}
          />} />
        <Route path="scorePage" element={
          <ScorePage 
            gameResult = {results}
            addGameResult = {addGameResult}
          />} />
        <Route path="SpecialSquare" element={<SpecialSquare />} />
        <Route path="win" element={<Win />} />
        <Route path="lose" element={<Lose />} />
      </Routes>
    </div>
    </>
  )
  
}
export default App;
