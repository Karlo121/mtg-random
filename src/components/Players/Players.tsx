import React from 'react';
import { PlayersContainer } from './Players.style';
import { TPlayers } from './Players.type';

const Players = (props: TPlayers) => {
    const {playerCount, handleChange} = props;
  return (
    <PlayersContainer>
        <div className="playerCount">
            <p className="playerCountLabel">Player Count</p>
            <input type="text" name="playerCount" id="playerCount" className="playerCountInput" value={playerCount} onChange={handleChange} />
        </div>
    </PlayersContainer>
  )
}

export default Players