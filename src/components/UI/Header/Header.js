import React, { useState } from 'react';
import Aux from '../../../hoc/Auxiliary';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    return (
        <Aux>
            <div className="Header">
                <div className="Title">
                    <h1>Binge Watch</h1>
                </div>
                <div className="Input">
                    <input
                        placeholder="Search Shows..."
                        className="InputField"
                        onChange={props.onChange}
                    ></input>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/updates">Updates</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Aux>
    );
};

export default Header;
