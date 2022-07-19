import { TDeck } from "../../data/decks";

export type DeckProps = {
    index: number;
    deck: TDeck;
    activePlayers: string[];
}