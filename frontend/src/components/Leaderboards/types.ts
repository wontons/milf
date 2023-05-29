export interface MenuProps {
    selected: number;
    handleChange: (e: React.SyntheticEvent, value: number) => void;
};

export interface TabProps {
    children?: React.ReactNode;
    index: number;
    value: number;
};
