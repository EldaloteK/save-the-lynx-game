import * as React from "react";

function BoardSpace(props: any) {
    return (
        <svg className={`space-state ${props.searched <= 0 ? props.searched === 0 ? 'space-state-seen' : 'space-state-found' : ''}`} onClick={() => {props.coordinateClicked(props.coordinate)}} width="30px" height="30px" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="space" x="0" y="0" width="100" height="100"></rect>
                <text id="space-number" fontFamily="Luminari-Regular, Luminari" fontSize="30" fontWeight="normal" fill="#002268">
                    <tspan x="40" y="60">{props.searched !== -1 ? props.searched : ''}</tspan>
                </text>
            </g>
        </svg>
    );
}

export default BoardSpace;