import React, { useEffect, useState } from 'react'
import { PlayerProps } from './Player.type';

const Player = (props: PlayerProps) => {
    const {setPlayerCount, playerCount, player, activePlayers, index} = props;
    const [checked, setChecked] = useState(false);

    function radioHandler(event: React.ChangeEvent<EventTarget>) {
        switch(checked){
            case false: {
                setChecked(true);
                if(!activePlayers.includes((event.target as HTMLInputElement).value)) {
                    activePlayers.push((event.target as HTMLInputElement).value);
                    setPlayerCount(playerCount + 1);
                };
                console.log(activePlayers);
                break;
            };
            case true: {
                setChecked(false);
                activePlayers.filter((player,index) => {
                    if (player === (event.target as HTMLInputElement).value) {
                        activePlayers.splice(index,1);
                        if (playerCount >= 0) {
                            setPlayerCount(playerCount - 1);
                        }
                    }
                });
                console.log(activePlayers);
                break;
            };
        } 
    };

    return (
        <div className="radioBox" onClick={() =>  radioHandler}>
            <input
                type="radio"
                name={player.name}
                checked={checked}
                value={player.name}
                className="formInput"
                onClick={(e) => radioHandler(e)}
            />
            <p className="formName">{player.name}</p>
        </div>
    )
}

export default Player;
