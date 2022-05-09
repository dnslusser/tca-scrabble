import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
// import { PlayGame } from './PlayGame';
// import { Waiting } from './Waiting';
import { ScorePage } from './scorePage';
// import { SpecialSquare } from './SpecialSquare';
// import { Win } from './Win';
// import { Lose } from './Lose';
import { useEffect, useState } from 'react';
import localforage from 'localforage';
// import { createTheme } from '@mui/system/styles';


const App = () => {

  const [results, setResults] = useState([]);

  const [score, setScore] = useState("");

  const [leftOverScore, setLeftOverScore] = useState("");

  const loadGameResults = async () => {
    setResults(await localforage.getItem("gameResults") ?? []);
  };

  const updateLeftOverScore = async (newLeftOverScore) => {
    setLeftOverScore(await localforage.setItem('left over score', newLeftOverScore));
  };

  const updateScore = async (newScore) => {
    setScore(await localforage.setItem('score', newScore));
  };

  useEffect(
    () => {
      loadGameResults();
    }
    , []
  );



  const addGameResult = async (gameResult) => {
    const newResults = [
      ...results
      , gameResult
    ];

    setResults(newResults);

    await localforage.setItem("gameResults", newResults)    
  };


  const [currentGame, setCurrentGame] = useState({
    start: ""
    , score: ""

  });

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       light: '#757ce8',
  //       main: '#3f50b5',
  //       dark: '#002884',
  //     },
  //     secondary: {
  //       light: '#',
  //       main: '#',
  //       dark: '#',
  //     },
  //   },
  // });

  return (
    <>

    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home
            gameResults={results}
            setCurrentGame={setCurrentGame}
            // theme={theme}
          />
        } />

        {/* <Route path="playgame" element={
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
          currentGame={currentGame}
          />} /> */}
        <Route path="scorePage" element={
          <ScorePage 
            addGameResult = {addGameResult}
            currentGame={currentGame}
            updateScore={updateScore}
            updateLeftOverScore={updateLeftOverScore}
          />} />
        {/* <Route path="SpecialSquare" element={<SpecialSquare />} />
        <Route path="win" element={<Win />} />
        <Route path="lose" element={<Lose />} /> */}
      </Routes>
    </div>
    </>
  )
  
}
export default App;
