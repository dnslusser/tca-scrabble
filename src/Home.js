import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// const calculateWinPercentage = () => (
    
// );

// const calculateTopWord = () => ();

export const Home = () => {

    
    const nav = useNavigate();

    return (
        <>
            <h1
            variant = "primary"
            >
                Scrabble
            </h1>

                <h2>
                    Welcome!
                </h2>
                <br></br>
                <h3
                >
                    Top word: Jukebox
                </h3>
                <h3>
                    Win %: 67.3%
                </h3>
                <h3>

                </h3>
                <Button
                    variant = "outlined"
                    size="large"
                    onClick={() => nav("/playgame")}
                >
                Play
                </Button>

        </>
    );
};
