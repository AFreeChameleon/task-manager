import React, { Component } from 'react';
import './activity.css';
import TaskList from '../tasklist/tasklist';
import Progress from '../progress/progress';

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            tasks: []
        }
    }

    activityProgress(props) {
        const progress = [];
        props.tasks.forEach(task => progress.push(task.isComplete));
        if (progress.includes(false) && progress.includes(true)) {
            return <div className="title-progress-container in-progress">
                <div>IN PROGRESS</div>
            </div>
        } else if (!progress.includes(false)) {
            return <div className="title-progress-container completed">
                <div>COMPLETED</div>
            </div>
        } else {
            return <div className="title-progress-container not-started">
                <div>NOT STARTED</div>
            </div>
        }
    }

    percentProgress() {
        let completedTasks = 0;
        this.state.tasks.forEach(task => {
            if (task.isComplete) {
                completedTasks = completedTasks + 1;
            }
        });
        const percentCompleted = Math.ceil((completedTasks / this.state.tasks.length)*100)
        return percentCompleted;
    }

    componentDidMount() {
        fetch('/api/tasklist')
            .then(res => res.json())
            .then(data => {
                this.setState({
                name: data.name,
                tasks: data.tasks
            }, console.log(data))
        });
        let loadingopacity = 1;
        const opacityTimer = setInterval(() => {
            loadingopacity -= 0.25;
            console.log(loadingopacity)
            document.getElementById('loading-screen-container').style.opacity = loadingopacity;
        }, 100);
        setTimeout(() => {
            clearInterval(opacityTimer);
            document.getElementById('loading-screen-container').style.display = 'none';
        }, 400)
        
    }

    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="title-container">
                        <div className="title-text">{this.state.name}:</div>
                        <this.activityProgress tasks={this.state.tasks}/>
                    </div>
                    <TaskList tasks={this.state.tasks}/>
                    <Progress percentCompleted={this.percentProgress()}/>
                </div>
            </div>
        )
    }
}

export default Activity;
