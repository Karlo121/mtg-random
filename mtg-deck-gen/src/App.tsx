import React, { useState } from 'react';
import { start } from 'repl';
import {decks, TDeck} from './data/decks';
import {StyledContainer} from './App.style'; 
import Players from './components/Players/Players';
import Select from './components/Select/Select';
import Deck from './components/Deck/Deck';

 
function App() {
  const [playerCount, setPlayerCount] = useState<number>(0);
  const [chosenDecks, setChosenDecks] = useState<Array<TDeck>>([]);
  const [startingDecks, setStartingDecks] = useState<Array<TDeck>>(decks);
  const [squad, setSquad] = useState<Array<string>>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    let tempCount = parseInt(e.target.value); 
    setPlayerCount(tempCount);
  }
  function radioHandler(event: React.ChangeEvent<HTMLInputElement>) {
    squad.push(event.target.value);     
    setPlayerCount(playerCount + 1)
  };

  let generateTable = () => {
    console.log(squad);           
    let copyInitial: Array<TDeck> = startingDecks.slice();
    let generatedDecks = []; 
    for(let i = 0; i < playerCount; i++) {
      console.log(startingDecks.length);
      console.log(copyInitial.length); 
      let randomNumber = Math.floor(Math.random()*copyInitial.length); 
      let deck: TDeck = copyInitial[randomNumber];
      let index = copyInitial.indexOf(deck)

      generatedDecks.push(deck);
      copyInitial.splice(index,1);
    }
    setChosenDecks(generatedDecks);
  };

  let renderDecks = chosenDecks.map((deck: TDeck, index: number) => { return (
      <Deck index={index} deck={deck} squad={squad} />
    )});

  return (
    <StyledContainer  className="App">
      <Players playerCount={playerCount} handleChange={handleChange} />
      <Select radioHandler={radioHandler} />         
          <button type="button" onClick={generateTable}>Submit</button>
          <div>
            {renderDecks}
          </div>
    </StyledContainer>
  ); 
}

export default App;
