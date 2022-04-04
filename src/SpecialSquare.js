import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SpecialSquare = () => {

    const [letter, setLetter] = React.useState('');

    const handleChange = (event) => {
        setLetter(event.target.value);
    }

    const nav = useNavigate();

    return (
        <>
            <Button
            startIcon={<CloseIcon/>}
            onClick={() => nav("/playGame")}
            >
                Exit
            </Button>
            <h2>
                Special Square
            </h2>
            <Box
                sx={{ minWidth: 120}}
            >
                <FormControl fullWidth>
                    <InputLabel
                        id="doubleLetter"
                    >
                        Double Letter
                    </InputLabel>
                    <Select
                        labelId="doubleLetter-label"
                        id="doubleLetter-select"
                        value={letter}
                        label="Letter"
                        onChange={handleChange}
                    >
                        <MenuItem value={"A"}>A</MenuItem>
                        <MenuItem>B</MenuItem>
                        <MenuItem>C</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            
            <p>
                Triple Letter
                <Button
                startIcon={<ArrowDropDownIcon/>}
                >
                </Button>
            </p>
            <p>
                Double Word
                <Button
                startIcon={<ArrowDropDownIcon/>}
                >
                </Button>
            </p>
            <p>
                Triple Letter
                <Button
                startIcon={<ArrowDropDownIcon/>}
                >
                </Button>
            </p>
            <Button
                variant="outlined"
                color="success"
                onClick={() => nav("/playGame")}
            >
                Add
            </Button>

      </>
    );
};
