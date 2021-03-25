import React, { useState } from 'react';
import './card.component.scss';

import { Players as BasketBallPlayers } from '../../../shared/data/person'
import { Players } from '../../../shared/interface/Players';

export const Card: React.FC = () => {
    const [player, setPlayers] = useState();

    return (
        <>
            <div className="main">
                {BasketBallPlayers.map((item, index) => {
                    const av = item.image;
                    return (
                        <div key={index} className="container">
                            <div className="firstname">
                                {item.firstName}
                            </div>
                            <div className="lastname">
                                {item.lastName}
                            </div>
                            <img className="img" src={av.default} alt="" height={50} width={50} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
