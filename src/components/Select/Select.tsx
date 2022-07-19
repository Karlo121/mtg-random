import React from 'react'
import Player from './Player/Player';
import { players } from './Select.data';
import { SelectContainer } from './Select.style'
import { TSelect,  TPlayer  } from './Select.type'

const Select = (props: TSelect) => {
    const {setPlayerCount, playerCount, activePlayers} = props;
    const renderPlayers: React.ReactNode = players.map((player: TPlayer, index: number) => {
        return (<Player player={player} setPlayerCount={setPlayerCount} playerCount={playerCount} activePlayers={activePlayers} index={index} />);
    })
    return (
        <SelectContainer>
            <div className="radioContainer"> 
                <div className="playerBoxes">
                    {renderPlayers}
                </div>
            </div>
        </SelectContainer>
    )
}

export default Select