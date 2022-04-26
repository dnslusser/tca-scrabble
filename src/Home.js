import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


// const calculateTopWord = () => ();

export const Home = ({
    gameResults
    ,setCurrentGame

}) => {

    
    const nav = useNavigate();

    const startGame = () => {
        setCurrentGame({
            start: (new Date()).toISOString()
        });
        
        nav("/playgame")
    };

    const win = gameResults.filter(n => n == true).length;

    let calculateWinPercentage = ((win / gameResults.length)*100).toFixed(2);
    calculateWinPercentage = isNaN(calculateWinPercentage) ? 0 : Number(calculateWinPercentage);

    return (
        <>
            <h1
            variant = "primary"
            >
                Scrabble
            </h1>

                <h2>
                    Welcome!
                </h2>
                <br></br>
                <h3
                >
                    Top word: Jukebox
                </h3>
                <h3>
                    Total games played: {gameResults.length}
                </h3>
                <h3>
                    Win Percentage: {calculateWinPercentage} %
                </h3>
                <Button
                    variant = "outlined"
                    size="large"
                    onClick={startGame}
                >
                Play
                </Button>

        </>
    );
};
