import { Dispatch, SetStateAction } from "react";
import { TPlayer } from "../Select.type";

export type PlayerProps = {
    setPlayerCount: Dispatch<SetStateAction<number>>;
    playerCount: number;
    player: TPlayer;
    activePlayers: Array<string>;
    index: number;
}