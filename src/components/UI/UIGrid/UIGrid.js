import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import './UIGrid.css';

const uiGrid = (props) => {
    return (
        <Aux>
            <div className="UIGrid" onClick={props.clicked}>
                <img src={props.image} alt="pic"></img>
                <h3 style={{ backgroundColor: '#000' }}>{props.name}</h3>
                <p>Genre: {props.genre}</p>
                <p>Language: {props.language}</p>
                <p>Aired on: {props.premiered}</p>
            </div>
        </Aux>
    );
};

export default uiGrid;
