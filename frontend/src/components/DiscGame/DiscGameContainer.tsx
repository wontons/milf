import { useEffect, useState } from "react";
import { useAPI } from "../../hooks";
import { DiscGame } from "./DiscGame";

export function DiscGameContainer() {
    const { api } = useAPI();
    const [letter, setLetter] = useState<string>('A');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [discNames, setDiscNames] = useState<Set<string>>(new Set<string>());
    const [answers, setAnswers] = useState<Set<string>>(new Set<string>());
    const [answerResult, setAnswerResult] = useState<string | null>(null);
    const [finished, setFinished] = useState<boolean>(false);
    const [guesses, setGuesses] = useState<number>(0);
    // const [answers, setAnswers] = useState<Map<string, Set<string>>>(new Map<string, Set<string>>([
    //     ["A", new Set<string>()],
    //     ["B", new Set<string>()],
    //     ["C", new Set<string>()],
    //     ["D", new Set<string>()],
    //     ["E", new Set<string>()],
    //     ["F", new Set<string>()],
    //     ["G", new Set<string>()],
    //     ["H", new Set<string>()],
    //     ["I", new Set<string>()],
    //     ["J", new Set<string>()],
    //     ["K", new Set<string>()],
    //     ["L", new Set<string>()],
    //     ["M", new Set<string>()],
    //     ["N", new Set<string>()],
    //     ["O", new Set<string>()],
    //     ["P", new Set<string>()],
    //     ["Q", new Set<string>()],
    //     ["R", new Set<string>()],
    //     ["S", new Set<string>()],
    //     ["T", new Set<string>()],
    //     ["U", new Set<string>()],
    //     ["V", new Set<string>()],
    //     ["W", new Set<string>()],
    //     ["X", new Set<string>()],
    //     ["Y", new Set<string>()],
    //     ["Z", new Set<string>()],
    // ]));
    // const [currentAnswers, setCurrentAnswers] = useState<Set<string>>(answers.get(letter) || new Set<string>());
    // const guesses = new Map(answers);

    useEffect(() => {
        setLoading(true);
        api<DiscGamePageResponse>('get', `http://localhost:5000/disc-game?letter=${letter}`).then((resp) => {
            setDiscNames(new Set<string>(resp.data.disc_names));
        }).catch((e) => {
            setError(e?.response?.data?.message || `failed to get disc names for ${letter}`)
        }).finally(() => {
            setLoading(false);
        });
    }, [api, letter]);

    const checkAnswer = (answer: string): boolean => {
        setGuesses(guesses + 1);
        if (!answers.has(answer)) {
            if (discNames.has(answer)) {
                setAnswerResult("found");
                setAnswers(prev => new Set<string>(prev.add(answer)));
                return true;
            }

            setAnswerResult("not found");
            return false;
        }

        setAnswerResult("already guessed")
        return false;
    }

    useEffect(() => {
        if (answers.size > 0 && answers.size === discNames.size) {
            setFinished(true);
        }
    }, [answers, discNames]);
    
    return (
        <DiscGame 
            letter={letter} 
            setLetter={setLetter} 
            loading={loading} 
            error={error} 
            discNames={discNames}
            checkAnswer={checkAnswer}
            answers={answers}
            answerResult={answerResult}
            finished={finished}
            guesses={guesses}
        />
    );
}