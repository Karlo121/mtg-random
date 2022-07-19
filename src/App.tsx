import React, { useState } from 'react';
import {decks, TDeck} from './data/decks';
import {StyledContainer} from './App.style'; 
import Players from './components/Players/Players';
import Select from './components/Select/Select';
import Deck from './components/Deck/Deck';

 
function App() {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [chosenDecks, setChosenDecks] = useState<Array<TDeck>>([]);
  const [activePlayers, setActivePlayers] = useState<Array<string>>([]);
  const [startingDecks, setStartingDecks] = useState<Array<TDeck>>(decks);
  const [squad, setSquad] = useState<Array<string>>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let count = activePlayers.length;
    setPlayerCount(count);
  }

  let generateTable = () => {
    console.log(activePlayers);           
    let activeDecks: Array<TDeck> = startingDecks.slice();
    let generatedDecks = []; 
    for(let i = 0; i < activePlayers.length; i++) {
      let randomNumber = Math.floor(Math.random()*activeDecks.length); 
      let deck: TDeck = activeDecks[randomNumber];
      let index = activeDecks.indexOf(deck)

      generatedDecks.push(deck);
      activeDecks.splice(index,1);
    }
    setChosenDecks(generatedDecks);
  };

  let renderDecks = chosenDecks.map((deck: TDeck, index: number) => { return (
      <Deck index={index} deck={deck} activePlayers={activePlayers} />
    )});

  return (
    <StyledContainer  className="App">
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
