import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { PlayGame } from './PlayGame';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='playgame' element={<PlayGame />} />
      </Routes>
    </div>

  );
}

export default App;
