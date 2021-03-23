import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    };

    componentDidUpdate() {
        if (this.props.id) {
            if (
                !this.state.loadedPost ||
                (this.state.loadedPost &&
                    this.state.loadedPost.id !== this.props.id)
            ) {
                axios
                    .get('http://api.tvmaze.com/shows/' + this.props.id)
                    .then((response) => {
                        console.log(response);
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    render() {
        let post = null;
        if (this.props.id) {
            post = <p style={{ color: 'white' }}>Loading...</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <img
                        src={this.state.loadedPost.image.medium}
                        alt={this.props.name}
                    ></img>
                    <h4>{this.state.loadedPost.name}</h4>
                    <p>{this.state.loadedPost.summary}</p>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;
