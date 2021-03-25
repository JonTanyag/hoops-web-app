import React from 'react';
import './reports.component.scss';

export const Reports: React.FC = () => {

    return (
        <>
            <div className="reports">
                <div className="report-panel">
                    <div className="sub-panel">
                        <div className="first-panel">
                            Report 1
                        </div>
                        <div className="second-panel">
                            Report 2
                        </div>
                    </div>
                    <div className="sub-panel2">
                        <div className="third-panel">
                            Report 3
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}