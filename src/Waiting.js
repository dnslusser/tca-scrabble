import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export const Waiting = ({score}) => {

    const nav = useNavigate();


    return (
        <>
            <Button
            startIcon={<CloseIcon/>}
            onClick={() => nav("/")}
            >
                Exit
            </Button>
            <h2>
                Waiting...
            </h2>
            <h2>
                Current Score: {score}

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
                onClick={() => nav("/scorePage")}
            >
                Game Over
            </Button>

      </>
    );
};
