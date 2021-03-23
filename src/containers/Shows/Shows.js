import React, { useState } from 'react';
import Aux from '../../hoc/Auxiliary';
import Header from '../../components/UI/Header/Header';
import Slide from '../../components/UI/Slide/Slide';
import About from '../../components/About/About';
import ShowUpdates from '../../components/ShowUpdates/ShowUpdates';
import ShowInfo from '../../components/ShowInfo/ShowInfo';
import Footer from '../../components/UI/Footer/Footer';
import { Route } from 'react-router-dom';

const Shows = ({ tvshow }) => {
    const [inputSearch, setInputSearch] = useState('');

    const editInputSearch = (e) => {
        setInputSearch(e.target.value);
    };

    console.log(inputSearch);
    console.log(tvshow);

    const filterHandler = () => {
        return tvshow.filter((tv) => {
            tv.toLowerCase().includes(inputSearch.toLowerCase());
        });
    };

    return (
        <Aux>
            <Header onChange={editInputSearch} />
            <Route path="/about" exact component={About} />
            <Route path="/updates" exact component={ShowUpdates} />
            <Route path="/" exact component={Slide} />
            <Route path="/" exact component={ShowInfo} />
            <Footer />
        </Aux>
    );
};

export default Shows;
