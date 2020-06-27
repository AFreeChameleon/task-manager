import React, { Component } from 'react';
import './progress.css';

class Progress extends Component {
    calculateProgressPercent(props) {
        console.log(props)
        return (
            <div className="progress-bar-container">
                <div style={
                    {width: `${props.percentCompleted}%`}
                } className="progress-bar-completed">
                </div>

                <div style={
                    {width: `${100 - props.percentCompleted}%`}
                } className="progress-bar-incompleted">
                </div>
            </div>
        )
    }

    render() {
        return (
        <div className="progress-container">
            <div className="progress-title">Progress ({this.props.percentCompleted}%)</div>
            <this.calculateProgressPercent percentCompleted={this.props.percentCompleted}/>
        </div>
        )
    }
}

export default Progress;