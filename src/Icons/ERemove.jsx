import React from 'react';

function ERemove({width, height}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#212121" stroke="#212121" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" stroke="#212121" x1="38" x2="10" y1="10" y2="38"/>
                <line fill="none" stroke="#212121" x1="38" x2="10" y1="38" y2="10"/>
            </g>
        </svg>
	);
};

export default ERemove;