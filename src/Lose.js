import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Lose = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Better luck next time 😢
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
                    onClick={() => nav("/")}
                >
                    Exit
                </Button>
            </p>


      </>
    );
};
