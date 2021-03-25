import React, { useState } from 'react';
import './card.component.scss';

import { Players as BasketBallPlayers } from '../../../shared/data/person'
import { Players } from '../../../shared/interface/Players';

export const Card: React.FC = () => {
    const [player, setPlayers] = useState();

   

    return (
        <>
            
                {BasketBallPlayers.map((item, index) => {
                    const av = item.image;
                    console.log('HAHAHAHAHAH', av)
                    return(
                        <div key={index} className="container">
                            {item.lastName}
                            <img src={av.default} alt="" height={50} width={50}/>
                        </div>
                    )
                })}
        </>
    )
}
