import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, CircularProgress, IconButton, Modal, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Footer } from "../Footer";
import { DiscName } from "./DiscName";

interface Props {
    letter: string;
    setLetter: (letter: string) => void;
    loading: boolean;
    error: string | null;
    discNames: Set<string>;
    checkAnswer: (answer: string) => boolean;
    answers: Set<string>;
    answerResult: string | null;
    finished: boolean;
    guesses: number;
}

const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

export function DiscGame(props: Props) {
    const { letter, setLetter, loading, error, discNames,
        checkAnswer, answers, answerResult, finished, guesses } = props;
    const [search, setSearch] = useState<string>('');
    const [lastGuess, setLastGuess] = useState<string>('');
    const navigate = useNavigate();

    const getResultColor = (result: string): string => {
        if (result === "found") {
            return "green";
        }

        if (result === "not found") {
            return "red";
        }

        return "black";
    }

    const handleCheckAnswer = () => {
        setLastGuess(search);
        if (checkAnswer(search)) {
            setSearch('');
        }
        
    };
    
    if (loading){
        return (
            <Stack>
                <CircularProgress/>
            </Stack>
        )
    }

    if (error){
        return (
            <Stack>
                <Typography>{error}</Typography>
            </Stack>
        )
    }

    return (
        <Box display="flex" flex={1} alignItems="flex-start" justifyContent="center" sx={{overflowY: 'auto'}}>
            <Modal open={finished}>
                <Box>
                    <Typography>{letter} Completed!</Typography>
                    <Typography>Total guesses: {guesses}</Typography>
                    <Typography>Correctness: {(discNames.size / guesses) * 100}%</Typography>
                    <Button onClick={() => navigate("/discgame")}>Reset</Button>
                    <Button>Submit Score</Button>
                </Box>
            </Modal>
            <Stack direction="column" justifyContent="center" alignItems="center">
                <Stack spacing={2} alignItems="center">
                    <Typography>Disc Game</Typography>
                    <Typography>Current Letter: {letter}</Typography>
                    <Typography>Discs Left: {discNames.size - answers.size}</Typography>
                    <TextField 
                        variant="outlined" 
                        label="Guess" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                            endAdornment: 
                            <IconButton onClick={handleCheckAnswer}>
                                <SearchIcon />
                            </IconButton>  
                        }}
                        onKeyDown={((e) => {
                            if (e.key === "Enter"){
                                handleCheckAnswer();
                            }
                        })}
                    />
                    <Stack alignItems="center">
                        <Typography sx={{ mr: '1rem'}}>last guess: {lastGuess}</Typography>
                        {answerResult && (
                            <Typography color={getResultColor(answerResult)}>{answerResult}</Typography>
                        )}
                    </Stack>
                </Stack>
                <Box flexWrap="wrap" width={{ xs: '90%', md: '60%'}} display="flex" alignItems="center" justifyContent="flex-start" alignContent="flex-start">
                    {discNames.size > 0 && Array.from(discNames).map((disc, idx) => (
                        <DiscName key={idx} name={answers.has(disc) ? disc : '?'}/>
                    ))}
                </Box>
                <Box flexWrap="wrap" width={{ xs: '90%', md: '60%'}} display="flex" alignItems="center" justifyContent="flex-start" alignContent="flex-start">
                    {alphabet.map((currLetter) => (
                        <Button key={currLetter} onClick={() => setLetter(currLetter)} disabled={letter === currLetter} sx={{m: "0.5rem"}}>
                            <Typography>
                                {currLetter}
                            </Typography>
                        </Button>
                    ))}
                </Box>
               <Footer />
            </Stack>
        </Box>
    );
}