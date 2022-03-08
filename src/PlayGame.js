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
            <TextField>

            </TextField>
            <Button
            startIcon={<AddIcon/>}>
                
            </Button>
            <Button
                variant="outlined"
            >
                Challenged
            </Button>
            <Button
                variant="contained"
                color="success"
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
