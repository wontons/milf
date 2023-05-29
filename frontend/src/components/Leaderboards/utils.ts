import { GridColDef } from "@mui/x-data-grid";

export const players: Player[] = [
    {id: 1, place: '1', name: 'anton sawka', points: 420.69},
    {id: 2, place: '2', name: 'john frommelt', points: 69},
    {id: 3, place: 't3', name: 'pee poo', points: 8},
    {id: 4, place: 't3', name: 'pee  a really long namepoo', points: 8},
];

export const leaderboardColumns: GridColDef[] = [
    {field: 'place', headerName: '#', flex: 1, hideSortIcons: true},
    {field: 'name', headerName: 'Name', flex: 3},
    {field: 'points', headerName: 'Points', flex: 1.5},
];

export const divisions: string[] = [
    'LEADERS',
    'MPO',
    'MA40',
    'FA40',
    'MA1',
    'FA1',
    'MA2',
    'FA2',
    'MA3',
    'FA3'
];
