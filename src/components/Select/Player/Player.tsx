import React from 'react'
import { PlayerProps } from './Player.type';

const Player = (props: PlayerProps) => {
    const {radioHandler, player} = props;
    return (
        <div className="radioBox" onClick={radioHandler}>
            <input
                type="radio"
                name={player.name}
                value={player.name}
                onChange={radioHandler}
                className="formInput"
            />
            <p className="formName">{player.name}</p>
        </div>
    )
}

export default Player;
