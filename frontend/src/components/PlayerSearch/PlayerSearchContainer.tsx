
import { useCallback, useEffect, useState } from "react";
import { useAPI } from "../../hooks";
import { buildPlayerSearchURL } from "../../utils";
import { PlayerSearch } from "./PlayerSearch";

const initialState: PlayerSearchFormState = {
    pdga_number: '',
    first_name: '',
    last_name: '',
    _class: '',
    city: '',
    state_prov: '',
    country: '',
}

export function PlayerSearchContainer() {
    const { api } = useAPI();
    const [formState, setFormState] = useState<PlayerSearchFormState>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [offset, setOffset] = useState<number>(0);

    const handleValueChange = <T,>(key: keyof PlayerSearchFormState, value: T | null): void => {
        setFormState((prev) => ({
            ...prev,
            [key]: value,
          }));
    }

    const nextPageClicked = () => {
        setPlayers([]);
        setOffset(offset + 1);
    }

    const prevPageClicked = () => {
        setPlayers([]);
        setOffset(offset - 1);
    };

    const handleSubmitSearch = useCallback(() => {
        const body = {
            ...formState,
            "limit": "25",
            "offset": offset*25,
        }
        const query_params = buildPlayerSearchURL(body);
        setLoading(true);
        api<Player[]>('get', `http://localhost:5000/players${query_params}`).then((resp) => {
            setPlayers(resp.data);
        }).catch((e) => {
            setError(e?.response?.data?.message || "failed to get players")
        }).finally(() => {
            setLoading(false);
        });
    }, [api, formState, offset]);

    useEffect(() => {
        handleSubmitSearch();
    }, [handleSubmitSearch, offset]);

    return (
        <PlayerSearch
            handleValueChanged={handleValueChange}
            nextPageClicked={nextPageClicked}
            prevPageClicked={prevPageClicked}
            handleSubmitSearch={handleSubmitSearch}
            formState={formState}
            loading={loading}
            error={error}
            offset={offset}
            players={players}
        />
        )
}