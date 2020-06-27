import React, { Component } from 'react';
import './taskitem.css';

class TaskItem extends Component {
    calculateNormalTime(props) {
        const rawTime = new Date(props.date);
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let readableTime = {
            day: dayNames[rawTime.getDay()],
            date: rawTime.getDate(),
            minutes: rawTime.getMinutes() < 10 ? '0' + rawTime.getMinutes() : rawTime.getMinutes(),
            ampm: rawTime.getHours() > 12 ? 'AM' : 'PM',
            hour: rawTime.getHours() > 12 ? rawTime.getHours() - 12 : rawTime.getHours(),
            month: monthNames[rawTime.getMonth()],
            year: rawTime.getFullYear()
        }
        return (
            <div className="tasklist-item-date">
                <div className="tasklist-item-date-calendar">{readableTime.day} | {readableTime.date} {readableTime.month}. {readableTime.year}</div>
                <div className="tasklist-item-date-time">{readableTime.hour}:{readableTime.minutes} {readableTime.ampm}</div>
            </div>
        )
    }

    render() {
        return (
        <div className="tasklist-item">
            <div className="tasklist-item-row">
                <div className="tasklist-item-title">{this.props.task.name}</div>
                <this.calculateNormalTime date={this.props.task.date}/>
            </div>
            <div className="tasklist-item-description">
                {this.props.task.description}
            </div>
        </div>
        )
    }
}

export default TaskItem;