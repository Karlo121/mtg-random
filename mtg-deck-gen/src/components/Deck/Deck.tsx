import React from 'react'
import { TDeck } from '../../data/decks'
import { DeckContainer } from './Deck.style'
import { DeckProps } from './Deck.type';

const Deck = (props: DeckProps) => {
    const {deck, index, squad}  = props;
    return (
        <DeckContainer key={index}>
            <h2 className="name">{squad[index]}</h2>
            <h1>{deck.commander}</h1>
            <h3>{deck.colors.join('  ')} </h3>
        </DeckContainer> 
    ) 
}

export default Deck