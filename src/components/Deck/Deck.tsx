import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { TDeck } from '../../data/decks'
import { DeckContainer } from './Deck.style'
import { DeckProps } from './Deck.type';
import { renderColors } from './Deck.helper';


const Deck = (props: DeckProps) => {
    const {deck, index, activePlayers}  = props;
    return (
        <DeckContainer key={index}>
            <h2 className="name">{activePlayers[index]}</h2>
            <h1>{deck.commander}</h1>
            <div className="colorContainer">{renderColors(deck.colors)}</div>
        </DeckContainer> 
    ) 
}

export default Deck;