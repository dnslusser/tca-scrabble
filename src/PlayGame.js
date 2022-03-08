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
                startIcon={<AddIcon/>}>
                </Button>
                </h2>
            </div>
            <Button
                variant="outlined"
            >
                Challenged
            </Button>
            <Button
                variant="contained"
                color="success"
                onClick={() => nav("/waiting")}
            >
                Submit
            </Button>
            <Button
                variant="outlined"
            >
                Skip
            </Button>

      </>
    );
};
