import { useEffect } from 'react'

import { DeckContainer } from './Deck.style'
import { DeckProps } from './Deck.type';
import { renderColors } from './Deck.helper';


const Deck = (props: DeckProps) => {
    const {deck, index, activePlayers, allPlayers, setAllPlayers}  = props;

    useEffect(() => {
        noDuplicate();
    }, [allPlayers[index].lastPlayed.length]);


    let noDuplicate = () => {
        allPlayers.map((player) => {
            if(player.lastPlayed.length <= 3){
                if(activePlayers[index] === player.name) {
                    player.lastPlayed.push(deck.commander);
                }
            }
            else {
                if(activePlayers[index]  === player.name) {
                    player.lastPlayed.shift(); 
                }
            };
        });
        console.log(allPlayers);
        setAllPlayers(allPlayers);
    };
    return (
        <DeckContainer key={index}>
            <h2 className="name">{activePlayers[index]}</h2>
            <h1>{deck.commander}</h1>
            <div className="colorContainer">{renderColors(deck.colors)}</div>
        </DeckContainer> 
    ) 
}

export default Deck;