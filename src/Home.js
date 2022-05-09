import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const findTopWord = (results) => (
    Math.max(
        ...results.map(x => x.score)
    )
);

const findMinWord = (results) => (
    Math.min(
        ...results.map(x => x.score)
    )
);

export const Home = ({
    gameResults
    ,setCurrentGame

}) => {

    
    const nav = useNavigate();

    const startGame = () => {
        setCurrentGame({
            start: (new Date()).toISOString()
        });
        
        nav("/scorepage")
    };

    const win = gameResults.filter(n => n.winner).length;

    const topWord = findTopWord(gameResults);

    // const topWord = 0;

    // if (gameResults != 0) {
    //     topWord = findTopWord(gameResults)
    // } 
 
    const minWord = findMinWord(gameResults);


    let calculateWinPercentage = ((win / gameResults.length)*100).toFixed(2);
    calculateWinPercentage = isNaN(calculateWinPercentage) ? 0 : Number(calculateWinPercentage);
    
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
      };

    return (
        <>
            <img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-04/7/10/enhanced/webdr03/anigif_original-26015-1428416794-4.gif" alt="scrabbleTileGif" width={100} height={100}/>
            <h1
            variant = "primary"
            >
                Scrabble
            </h1>

                <h2>
                    Welcome!
                </h2>

                <br></br>
                <h2
                >
                    Scoreboard:
                </h2>
                <h3
                    
                >
                    Top score: {topWord}
                </h3>
                <h3>
                    Lowest score: {minWord}
                </h3>
                <h3>
                    Total games played: {gameResults.length}
                </h3>
                <h3>
                    Win Percentage: {calculateWinPercentage} %
                </h3>
                <Button
                    id= "playButton"
                    variant = "outlined"
                    size="large"
                    onClick={startGame}
                >
                Play
                </Button>

        </>
    );
};
