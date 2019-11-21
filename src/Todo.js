import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEdit: false, value: this.props.text };

        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleDoneClick = this.handleDoneClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleRemoveClick() {
        this.props.remove(this.props.id)
    }
    handleDoneClick(ev) {
        ev.target.style.textDecoration = "line-through";
        ev.target.style.fontStyle = "oblique"
    }
    handleEdit() {
        this.setState((st) => { return { ...st, isEdit: true } })
    }
    handleChange(evt) {
        let obj = { value: evt.target.value }
        this.setState((st) => { return { ...st, ...obj } })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState((st) => { return { ...st, ...{ isEdit: false } } })
        this.props.edit(this.state.value, this.props.id);
    }

    render() {
        var edit =
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter todo" onChange={this.handleChange} value={this.state.value} />
                <button>Save</button>
            </form>
        var notEdit = <li onClick={this.handleDoneClick}>
            {this.props.text}  <button onClick={this.handleRemoveClick}>X</button>  <button onClick={this.handleEdit}>Edit</button>
        </li>
        return (<div>
            {this.state.isEdit ? edit : notEdit}


        </div>)
    }
}

export default Todo;
