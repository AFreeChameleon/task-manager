import React, { Component } from 'react';
import './loadingscreen.css';

class LoadingScreen extends Component {
    render() {
        return (
            <div className="loading-screen-container" id="loading-screen-container">
                <div className="loading-screen-logo">Loading...</div>
            </div>
        )
    }
}

export default LoadingScreen;
