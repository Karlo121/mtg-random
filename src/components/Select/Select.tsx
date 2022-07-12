import React from 'react'
import Player from './Player/Player';
import { players } from './Select.data';
import { SelectContainer } from './Select.style'
import { TSelect,  TPlayer  } from './Select.type'

const Select = (props: TSelect) => {
    const {radioHandler} = props;
    const renderPlayers: React.ReactNode = players.map((player: TPlayer) => {
        return (<Player player={player} radioHandler={radioHandler} />);
    })
    return (
        <SelectContainer>
            <div className="radioContainer"> 
                <div>
                    <h2 className="headerTitle">Who playin?</h2>
                </div>
                <div>
                    {renderPlayers}
                </div>
            </div>
        </SelectContainer>
    )
}

export default Select