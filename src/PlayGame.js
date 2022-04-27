// import * as ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import CloseIcon from '@mui/icons-material/Close';
// import TextField from '@mui/material/TextField'
// import { useState } from 'react';


// export const PlayGame = ({
//     score
//     , updateScore
// }) => {

//     const nav = useNavigate();

//     const [word, setWord] = useState([]); 
    
//     const [scoreForEditing, setScoreForEditing] = useState([score]);
    
//     // const onClick = () => {
//     //     setScoreForEditing( arr => [...arr, `${arr.length}`]);
//     //     nav("/waiting");
//     // }

//     return (
//         <>
//             <Button
//             startIcon={<CloseIcon/>}
//             onClick={() => nav("/")}
//             >
//                 Exit
//             </Button>
//             <h2>
//                 My Turn
//                 {score}
//             </h2>
//             <div>
//                 <TextField
//                     type="text"
//                     label="My Word"
//                     id="myWord"
//                     inputProps={{ 
//                         maxLength: 7 
//                     }}
//                     value={word}
//                     onChange={(e) => setWord(e.target.value)}
//                 >
//                 </TextField>
//             </div>
//             <div>
//                 <TextField
//                     label="Score"
//                     type="number"
//                     value={scoreForEditing}
//                     onChange={(e) =>
//                         // e.target.value < 0
//                         // ? (e.target.value = 0)
//                         // : e.target.value
//                         setScoreForEditing(e.target.value)
//                     }
//                     onClick={
//                         () => 
//                         updateScore(scoreForEditing)
//                     }
//                 >

//                 </TextField>
//             </div>

//             {/* <Button
//                 className="generalButton"
//                 variant="outlined"
//             >
//                 Challenged
//             </Button> */}
//             <Button
//                 className="generalButton"
//                 variant="outlined"
//             >
//                 Skip
//             </Button>

//             <Button
//                 className="generalButton"
//                 variant="contained"
//                 color="success"
//                 onClick={onClick}

//             >
//                 Submit
//             </Button>



//       </>
//     );
// };

// export default PlayGame;
