import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

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


    return (
        <>
            <h1
            variant = "primary"
            >
                Scrabble
            </h1>

                <h2>
                    Welcome!
                    {Date}
                </h2>
                <br></br>
                {/* <Card
                    sx={{ minWidth: 275}}
                    
                >
                    <CardContent>
                        <Typography
                            variant="h5"
                            gutterBottom
                        >
                            Top Score: {topWord}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                        >
                            Lowest Score: {minWord}
                        </Typography>
                        <Typography
                            variant="h5"
                            gutterBottom
                        >
                            Total Games Played: {gameResults.length}
                        </Typography>
                        <Typography
                            variant="h5"
                        >
                            Win Percentage: {calculateWinPercentage} %
                        </Typography>
                    </CardContent>
                </Card> */}
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
                    
                    variant = "outlined"
                    size="large"
                    onClick={startGame}
                >
                Play
                </Button>

        </>
    );
};
