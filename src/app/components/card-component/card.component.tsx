import React, { forwardRef, memo, useEffect, useState } from 'react';
import './card.component.scss';

import { Players as $BasketBallPlayers } from '../../../shared/data/person'
import { Players } from '../../../shared/interface/Players';
import { Ref } from '../../../shared/interface/Ref';
import { Props } from '../../../shared/interface/Props';
import { cloneDeep } from 'lodash';
import { of } from 'rxjs';

interface State {
    loading: boolean;
    sourcesList: Players[];
    list: Players[];
    expandedList: number[];
}

const initialState = (props: Props) => {
    return {
        loading: false,
        sourcesList: [],
        list: [],
        expandedList: []
    }
}

export const Card = memo(
    forwardRef<Ref, Props>((props, ref) => {
        const [state, setState] = useState<State>(initialState(props));

        useEffect(() => {

            const subscribe = of($BasketBallPlayers).subscribe(res => {
                const list = cloneDeep(res);
                const sourcesList = cloneDeep(res);

                setState(prevState => ({ ...prevState, list, sourcesList }));                
            })

            return () => {
                subscribe.unsubscribe();
            }
            
        }, [])

        return (
            <>
                <div className="main">
                    {state.list.map((item, index) => {
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
    }),
);
