import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { PlayGame } from './PlayGame';
import { Waiting } from './Waiting';
import { ScorePage } from './scorePage';
import { SpecialSquare } from './SpecialSquare';
import { Win } from './Win';
import { Lose } from './Lose';

function App() {

  return (
    <>

    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='playgame' element={<PlayGame />} />
        <Route path='waiting' element={<Waiting />} />
        <Route path='scorePage' element={<ScorePage />} />
        <Route path='SpecialSquare' element={<SpecialSquare />} />
        <Route path='win' element={<Win />} />
        <Route path='lose' element={<Lose />} />
      </Routes>
    </div>
    </>
  )
  
}
export default App;
