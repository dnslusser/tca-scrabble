import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


export const ScorePage = ({
    addGameResult
    , currentGame
    , updateScore
    , updateLeftOverScore
    
}) => {

    const nav = useNavigate();

    const [scoreForEditing, setScoreForEditing] = useState(0);

    const [leftOverScoreForEditing, setLeftOverScoreForEditing] = useState(0);

    const totalScore = scoreForEditing - leftOverScoreForEditing;

    const endGameWin = () => {
        addGameResult({
            start: currentGame.start
            , end: (new Date()).toISOString()
            , winner: true
            , score: totalScore
        });
        updateScore();
         nav("/");
    };

    const endGameLose = () => {
        addGameResult({
            start: currentGame.start
            , end: (new Date()).toISOString()
            , winner: false
            , score: totalScore
        });
        updateScore();
         nav("/");
    };


    return (
        <>
        <Button
             startIcon={<CloseIcon/>}
             onClick={() => nav("/")}
             >
                 Exit
            </Button>

            <h2>
                Play Game
            </h2>
            {/* <p>Score</p> */}
            <h2>
            <TextField
                label="Your Score"
                placeholder="your score"
                id="leftOver"
                type="number"
                min="0"
                required="yes"
                value={scoreForEditing}
                onChange={(e) =>
                    setScoreForEditing(e.target.value)
                }
                onClick={
                    () => 
                    updateScore(scoreForEditing)
                     }
            >

            </TextField>
            </h2>
            -
            <h2>
            </h2>
            {/* <p>Letters left over</p> */}
            <h2>
            <TextField
                label="Letters left over"
                placeholder="letters left over score"
                id="leftOver"
                type="number"
                min="0"
                required="yes"
                value={leftOverScoreForEditing}
                onChange={(e) =>
                    setLeftOverScoreForEditing(e.target.value)
                } 
                onClick={
                    () => 
                    updateLeftOverScore(leftOverScoreForEditing)
                    }

            >

            </TextField>
            </h2>
            =
            <h2>
                {totalScore}
            </h2>
            
            <Stack
                direction="row" 
                spacing={2} 
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="outlined"
                    onClick={() => endGameLose()}
                >
                    I Lost
                </Button>

                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => endGameWin()}
                >
                    I won!
                </Button>
            </Stack>


      </>
    );
};
 export default ScorePage;