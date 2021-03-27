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
                            <div className="details-section">
                                <div className="name">
                                    <span>Name: {item.firstName} {item.lastName} </span>
                                </div>
                                <div className="attributes">
                                    <div>
                                        <span>
                                            Position: {item.position}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            Height: {item.height}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            Weight: {item.weight}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="image-section">
                                <img className="img" src={av.default} alt="" height={50} width={50} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
