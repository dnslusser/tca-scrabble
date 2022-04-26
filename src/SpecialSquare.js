import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SpecialSquare = () => {

    const [letter, setValue, word] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
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
                        <MenuItem value={"B"}>B</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            
            <Box
                sx={{ minWidth: 120}}
            >
                <FormControl fullWidth>
                    <InputLabel
                        id="tripleLetter"
                    >
                        Triple Letter
                    </InputLabel>
                    <Select
                        labelId="tripleLetter-label"
                        id="tripleLetter-select"
                        value={letter}
                        label="Letter"
                        onChange={handleChange}
                    >
                        <MenuItem value={"A"}>A</MenuItem>
                        <MenuItem value={"B"}>B</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            <Box
                sx={{ minWidth: 120}}
            >
                <FormControl fullWidth>
                    <InputLabel
                        id="doubleWord"
                    >
                        Double Word
                    </InputLabel>
                    <Select
                        labelId="doubleWord-label"
                        id="doubleWord-select"
                        value={word}
                        label="Word"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Word 1</MenuItem>
                        <MenuItem value={2}>Word 2</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            <Box
                sx={{ minWidth: 120}}
            >
                <FormControl fullWidth>
                    <InputLabel
                        id="doubleWord"
                    >
                        Triple Word
                    </InputLabel>
                    <Select
                        labelId="tripleWord-label"
                        id="tripleWord-select"
                        value={word}
                        label="Word"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Word 1</MenuItem>
                        <MenuItem value={2}>Word 2</MenuItem>
                    </Select>

                </FormControl>
            </Box>
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
