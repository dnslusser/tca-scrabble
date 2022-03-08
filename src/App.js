import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { PlayGame } from './PlayGame';
import { Waiting } from './Waiting';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='playgame' element={<PlayGame />} />
        <Route path='waiting' element={<Waiting />}v />
      </Routes>
    </div>

  );
}

export default App;
