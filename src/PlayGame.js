import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField'


export const PlayGame = () => {

    const nav = useNavigate();

    return (
        <>
            <Button
            startIcon={<CloseIcon/>}
            onClick={() => nav("/quit")}
            >
                Exit
            </Button>
            <h2>
                My Turn
            </h2>
            <div>
                <TextField
                    label="My Word"
                    id="myWord"
                    inputProps={{ maxLength: 7 }}
                >
                </TextField>
                <Button
                startIcon={<AddIcon/>}>
                </Button>
            </div>
            <div>
                <h2>
                    Special Squares?
                <Button
                startIcon={<AddIcon/>}
                onClick={() => nav("/SpecialSquare")}
                >
                </Button>
                </h2>
            </div>
            <Button
                className="generalButton"
                variant="outlined"
            >
                Challenged
            </Button>
            <Button
                className="generalButton"
                variant="contained"
                color="success"
                onClick={() => nav("/waiting")}
            >
                Submit
            </Button>
            <Button
                className="generalButton"
                variant="outlined"
                onClick={() => nav("/waiting")}
            >
                Skip
            </Button>

      </>
    );
};
