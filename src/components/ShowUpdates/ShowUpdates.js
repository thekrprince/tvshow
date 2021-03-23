import React from 'react';

import './ShowUpdates.css';

const showUpdates = (props) => {
    return (
        <div className="Updates">
            <h3>Updates</h3>
            <p>{props.name}</p>
            <img src={props.image} alt="a"></img>
        </div>
    );
};

export default showUpdates;
