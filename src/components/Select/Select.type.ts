import { Dispatch, SetStateAction } from "react";

export type TSelect = {
   setPlayerCount: Dispatch<SetStateAction<number>>;
   playerCount: number;
   activePlayers: Array<string>;
};

export type TPlayer = {
    name: string;
    img: string;
    winCount: number;
    lastPlayed: string[];
};