import { ChangeEvent } from "react";

export type TPlayers = {
    playerCount: number;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}