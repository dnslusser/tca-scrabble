import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

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
                <h3>
                    Top word:
                </h3>
                <h3>
                    Win %:
                </h3>
                <h3>

                </h3>
                <Button
                    //class = "button"
                    variant = "outlined"
                    size="large"
                    onClick={() => nav("/playgame")}
                >
                Play
                </Button>

        </>
    );
};
