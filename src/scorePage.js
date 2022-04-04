import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export const ScorePage = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Game Over!
            </h2>
            <h2>
                (Your Score displayed)
            </h2>
            -
            <h2>
                (letters left over)
            </h2>
            <h2>
            <TextField
                type="number"
                min="0"
                required="yes"
            >
                
            </TextField>
            </h2>
            =
            <h2>
                (Total Score display)
            </h2>

            <Button
                variant="outlined"
                color="success"
                onClick={() => nav("/Win")}
            >
                I Won!
            </Button>
            <Button
                variant="outlined"
                onClick={() => nav("/Lose")}
            >
                I Lost
            </Button>

      </>
    );
};
