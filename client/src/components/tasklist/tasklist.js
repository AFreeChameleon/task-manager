import React, { Component } from 'react';
import TaskItem from '../taskitem/taskitem';
import './tasklist.css';

class TaskList extends Component {
    calculateMilestone(props) {
        if (props.isComplete) {
            return (<div className="tasklist-milestone-container">
                <div className="tasklist-milestone-icon icon-complete"></div>
                <div className="tasklist-milestone-line line-complete"></div>
            </div>)
        } else {
            return (<div className="tasklist-milestone-container">
                <div className="tasklist-milestone-icon icon-incomplete"></div>
                <div className="tasklist-milestone-line line-incomplete"></div>
            </div>)
        }
    }

    render() {
        return (
            <div className="tasklist-grid">                
                {this.props.tasks.map((task, index) => (
                    <div className="tasklist-content" key={index}>
                        <this.calculateMilestone isComplete={task.isComplete}/>
                        <TaskItem task={task}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default TaskList;
