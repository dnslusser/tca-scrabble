import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export const Waiting = () => {

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
                Waiting...
            </h2>
            <h2>
                Current Score:
            </h2>
            <Button
                variant="outlined"
                color="success"
                onClick={() => nav("/playGame")}
            >
                My Turn
            </Button>
            <Button
                variant="outlined"
            >
                Game Over
            </Button>

      </>
    );
};
