import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { Footer } from "../Footer";
import { PlayerRow } from "./PlayerRow";

interface Props{
    handleValueChanged: <T,>(key: keyof PlayerSearchFormState, value: T | null) => void;
    nextPageClicked: VoidFunction;
    prevPageClicked: VoidFunction;
    handleSubmitSearch: VoidFunction;
    formState: PlayerSearchFormState;
    loading: boolean;
    error: string | null;
    offset: number;
    players: any[];
}

export function PlayerSearch(props: Props) {
    const {handleValueChanged, nextPageClicked, prevPageClicked, formState,
        handleSubmitSearch, loading, error, offset, players} = props;

    const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

    const handleClassChanged = (event: SelectChangeEvent) => {
        handleValueChanged('_class', event.target.value)
    };

    const handleAdvancedClick = () => {
        setShowAdvanced(!showAdvanced);
    }

    return (
        <Box display="flex" justifyContent="center" sx={{overflowY: 'auto'}}>
            <Stack direction="column" justifyContent="top" alignItems="center" m="1rem">
                <Typography variant="h4">Player Search</Typography>
                <Button title="Advanced" onClick={handleAdvancedClick} variant="text" sx={{ my: "1rem" }}>
                    {showAdvanced ? "Hide Advanced" : "Show Advanced"}
                </Button>
                <Stack direction={showAdvanced ? "row" : "column"} sx={{ mb: '1rem'}}>
                    <Box display="flex" mr="1rem">
                        <Stack spacing={2}>
                            <TextField label="PDGA Number" onChange={(event) => handleValueChanged('pdga_number', event.target.value)} value={formState.pdga_number}/>
                            <TextField label="First Name" onChange={(event) => handleValueChanged('first_name', event.target.value)} value={formState.first_name}/>
                            <TextField label="Last Name" onChange={(event) => handleValueChanged('last_name', event.target.value)} value={formState.last_name}/>
                            <Button title="Search" onClick={handleSubmitSearch} variant="contained" sx={{ m: "1rem", flex: 1 }}>
                                <Typography variant="h6" sx={{color: '#EDBA12'}}><strong>Search</strong></Typography>
                            </Button>
                        </Stack>    
                    </Box>
                    {showAdvanced && 
                        <Box display="flex">
                            <Stack spacing={2}>
                            <FormControl fullWidth>
                                <InputLabel id="class-select">Class</InputLabel>
                                <Select label="Class" onChange={handleClassChanged} value={formState._class}>
                                    <MenuItem value="">None</MenuItem>
                                    <MenuItem value="P">Professional</MenuItem>
                                    <MenuItem value="A">Amatuer</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField label="City" onChange={(event) => handleValueChanged('city', event.target.value)} value={formState.city}/>
                            <TextField label="State/Province" onChange={(event) => handleValueChanged('state_prov', event.target.value)} value={formState.state_prov}/>
                            <TextField label="Country" onChange={(event) => handleValueChanged('country', event.target.value)} value={formState.country}/>
                            
                            </Stack>
                        </Box>
                    }
                </Stack>
                <Typography>{error}</Typography>
                { players.length > 0 && 
                    <Box width="100%" justifyContent="center" alignItems="center">
                        { loading && 
                            <Stack justifyContent="center" alignItems="center">
                                <CircularProgress />
                            </Stack>
                        }
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    <TableCell>PDGA Number</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>From</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                { players.map((player) => (
                                    <PlayerRow
                                        key={player.pdga_number}
                                        player={player}
                                    />
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Stack direction="row" justifyContent="center" alignItems="center" m="1rem">
                            { offset !== 0 && <Button title="Prev" onClick={prevPageClicked} variant="contained" sx={{mr: "1rem"}}>Prev</Button> }
                            <Button title="Next" onClick={nextPageClicked} variant="contained">Next</Button>
                        </Stack>
                    </Box>
                }
                <Footer />
            </Stack>
        </Box>)
}