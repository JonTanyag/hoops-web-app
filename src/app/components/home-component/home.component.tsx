import React, { forwardRef, useState, useEffect, memo } from 'react';
import './home.component.scss';
import { $GetDataService } from '../../../shared/service/getData';
import { StudentModel } from '../../../shared/interface/Student';
import { Ref } from '../../../shared/interface/Ref';
import { Props } from '../../../shared/interface/Props';
import { cloneDeep } from "lodash";
import { useRxEffect } from "../../../shared/utils/utils";


interface State {
    loading: boolean;
    sourcesList: StudentModel[];
    list: StudentModel[];
    expandedList: number[];
}

const initialState = (props: Props) => {
    return {
        loading: false,
        sourcesList: [],
        list: [],
        expandedList: []
    };
}

export const Home = memo(
    forwardRef<Ref, Props>((props, ref) => {
        const [state, setState] = useState<State>(initialState(props));

        useRxEffect(() => $GetDataService.getPlayers().subscribe(res => {
            const list = cloneDeep(res);
            const sourcesList = cloneDeep(res);

            setState(prevState => ({ ...prevState, list, sourcesList }));
        }), []);


        return (
            <>
                <div className="feed-section">
                    <div className="create-section">
                        <div className="header">
                            Hoops!
                        </div>
                        <div className="sub-header">
                            Lorem Ipsum is simply dummy text of the printing <br />
                            and typesetting industry. Lorem Ipsum has been <br />
                            the industry's standard dummy text ever since.
                        </div>
                        <div>
                            {
                                state.list.map((item, index) => {

                                })
                            }

                        </div>
                    </div>
                </div>
            </>
        )
    }),
);