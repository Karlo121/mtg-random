import { ChangeEvent } from "react";

export type TSelect = {
    radioHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TPlayer = {
    name: string;
    img: string;
    winCount: number;
};