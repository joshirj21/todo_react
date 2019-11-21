import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this)
    }
    handleRemoveClick() {
        this.props.remove(this.props.id)
    }
    handleDoneClick(ev) {
        ev.target.style.textDecoration = "line-through";
        ev.target.style.fontStyle = "oblique"
    }
    render() {
        return (<div>
            <li onClick={this.handleDoneClick}>
                {this.props.text}
            </li>
            <button onClick={this.handleRemoveClick}>X</button>
        </div>)
    }
}

export default Todo;
