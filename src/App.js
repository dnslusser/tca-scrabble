import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { PlayGame } from './PlayGame';
import { Waiting } from './Waiting';
import { ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='playgame' element={<PlayGame />} />
        <Route path='waiting' element={<Waiting />} />
      </Routes>
    </div><ThemeProvider theme={theme}></ThemeProvider>
    </>
  )
  
}
export default App;
