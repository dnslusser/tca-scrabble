import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Win = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Congrats! 🎉
            </h2>
            <p>
                <Button
                    variant="outlined"
                    onClick={() => nav("/playGame")}
                >
                    Play Again
                </Button>
            </p>

            <p>
                <Button
                    variant="outlined"
                    onClick={() => nav("/Home")}
                >
                    Exit
                </Button>
            </p>


      </>
    );
};
