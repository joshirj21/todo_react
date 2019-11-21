import React, { Component } from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: "" };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        this.setState({ todo: evt.target.value })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleForm(this.state);
        this.setState({ todo: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Todo">New Todo</label>
                <br />
                <input id="Todo" type="text" placeholder="Enter todo" onChange={this.handleChange} value={this.state.todo} />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;
