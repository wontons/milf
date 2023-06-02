import { GridColDef } from "@mui/x-data-grid";

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
