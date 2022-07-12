import { ChangeEvent } from "react";
import { TPlayer } from "../Select.type";

export type PlayerProps = {
    radioHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    player: TPlayer;
}