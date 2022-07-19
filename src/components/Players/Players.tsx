import React from 'react';
import { PlayersContainer } from './Players.style';
import { TPlayers } from './Players.type';
import logo from '../../media/logo.png'

const Players = (props: TPlayers) => {
    const {playerCount} = props;
  return (
    <PlayersContainer>
        <div className="playerCount">
            <img src={logo} alt="" />
            <p className="playerCountLabel">EDH Randomizer</p>
            <h2 className="playerCountValue">{playerCount}</h2>
        </div>
    </PlayersContainer>
  )
}

export default Players