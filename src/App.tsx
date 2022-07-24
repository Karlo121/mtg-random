import React, { useState } from 'react';
import {decks, TDeck} from './data/decks';
import {StyledContainer} from './App.style'; 
import {GlobalStyle} from './themes/global';
import Players from './components/Players/Players';
import Select from './components/Select/Select';
import Deck from './components/Deck/Deck';
import { players } from './components/Select/Select.data';
import { TPlayer } from './components/Select/Select.type';
import {getImage} from './api/getImage'

 
function App() {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [chosenDecks, setChosenDecks] = useState<Array<TDeck>>([]);
  const [activePlayers, setActivePlayers] = useState<Array<string>>([]);
  const [startingDecks, setStartingDecks] = useState<Array<TDeck>>(decks);
  const [allPlayers, setAllPlayers] = useState<Array<TPlayer>>(players);

  getImage();

  let generateRandom = (): number => {
    return Math.floor(Math.random()*startingDecks.length + 1);
  };

  let generateTable = () => {     
    let activeDecks: Array<TDeck> = startingDecks.slice();
    let generatedDecks: Array<TDeck> = []; 
    activePlayers.map((activePlayer) => {
      let deck: TDeck = activeDecks[generateRandom()];
      allPlayers.map((player) => {
        if(activePlayer === player.name) {
          if(player.lastPlayed.includes(deck.commander)) {
            let rerollDeck: TDeck = activeDecks[generateRandom()];
            generatedDecks.push(rerollDeck);
          }
          else {
            generatedDecks.push(deck);
            setChosenDecks(generatedDecks);
          }
        }
      });
    })
  };

  let renderDecks = chosenDecks.map((deck: TDeck, index: number) => { return (
      <Deck index={index} deck={deck} activePlayers={activePlayers} allPlayers={allPlayers} setAllPlayers={setAllPlayers} />
    )});

  return (
    <StyledContainer  className="App">
      <GlobalStyle />
      <Players playerCount={playerCount}/>
      <Select setPlayerCount={setPlayerCount} playerCount={playerCount} activePlayers={activePlayers} />         
      <div className="buttonContainer">
        <button type="button" onClick={generateTable} className="subButton">Submit</button>
      </div>
      <div className="genDeckContainer">
        {renderDecks}
      </div>
    </StyledContainer>
  ); 
}

export default App;
