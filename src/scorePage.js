import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export const ScorePage = ({
    addGameResult
    
}) => {

    const nav = useNavigate();

    const totalScore =  async (score) => {

    }

    const won = () => {
        addGameResult(true);
        nav(-3);
    }

    const lost = () => {
        addGameResult(false);
        nav(-3);
    }

    return (
        <>
            <h2>
                Game Over!
            </h2>
            <h2
                type="number"
                id="score"
            >
                (Your Score displayed)
            </h2>
            -
            <h2>
                (letters left over)
            </h2>
            <h2>
            <TextField
                id="leftOver"
                type="number"
                min="0"
                required="yes"
                onChange={(event) =>
                    event.target.value < 0
                    ? (event.target.value = 0)
                    : event.target.value
                }   
            >
                
            </TextField>
            </h2>
            =
            <h2>
                {/* {totalScore} */}
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
