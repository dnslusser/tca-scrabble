import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';


export const ScorePage = ({
    addGameResult
    , score
    , updateScore
    , totalScore
    , updateTotalScore
    , updateLeftOverScore
    , leftOverScore
    
}) => {

    const nav = useNavigate();

    const [scoreForEditing, setScoreForEditing] = useState([score]);

    const [leftOverScoreForEditing, setLeftOverScoreForEditing] = useState([leftOverScore]);

    const [totalScoreForEditing, setTotalScoreForEditing] = useState([totalScore]);
    
    const setTotalScore = (scoreForEditing, leftOverScore) => {
        let totalScore = {scoreForEditing} - {leftOverScore};
        <h2>
            {totalScore}
        </h2>
    };

    const won = () => {
        addGameResult(true);
        nav("/");
    }

    const lost = () => {
        addGameResult(false);
        nav("/");
    }

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
            <h2>

            </h2>
            <h2>
            <TextField
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
            <h2>
            <TextField
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
                {setTotalScore}
            </h2>

            <Button
                variant="outlined"
                color="success"
                onClick={won}
            >
                I Won!
            </Button>
            <Button
                variant="outlined"
                onClick={lost}
            >
                I Lost
            </Button>

      </>
    );
};
 export default ScorePage;