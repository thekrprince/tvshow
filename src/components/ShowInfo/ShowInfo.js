import React, { Component, Suspense, lazy } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Auxiliary';
import FullPost from '../FullPost/FullPost';
import './ShowInfo.css';
const UIGrid = lazy(() => import('../UI/UIGrid/UIGrid'));

class ShowInfo extends Component {
    state = {
        tvshow: [],
        search: [],
        slectedShowId: null,
    };

    componentDidMount() {
        axios.get('http://api.tvmaze.com/shows').then((response) => {
            const tvshow = response.data;
            this.setState({ tvshow: tvshow });
            console.log(response);
        });
    }

    showClickedHandler = (id) => {
        this.setState({ slectedShowId: id });
    };

    render() {
        const tvshow = this.state.tvshow.map((show) => {
            return (
                <UIGrid
                    key={show.id}
                    name={show.name}
                    image={show.image.medium}
                    genre={show.genres}
                    language={show.language}
                    premiered={show.premiered}
                    clicked={() => this.showClickedHandler(show.id)}
                />
            );
        });

        return (
            <Aux>
                <div className="ShowInfo">
                    <Suspense
                        fallback={
                            <div style={{ color: 'white' }}>Loading...</div>
                        }
                    >
                        {tvshow}
                    </Suspense>
                </div>
                <FullPost id={this.state.slectedShowId} />
            </Aux>
        );
    }
}

export default ShowInfo;
