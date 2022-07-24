import { Dispatch, SetStateAction } from "react";
import { TDeck } from "../../data/decks";
import { TPlayer } from "../Select/Select.type";

export type DeckProps = {
    index: number;
    deck: TDeck;
    activePlayers: string[];
    allPlayers: Array<TPlayer>;
    setAllPlayers: Dispatch<SetStateAction<TPlayer[]>>;
}