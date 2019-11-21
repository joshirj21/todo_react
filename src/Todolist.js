import React, { Component } from 'react';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.handleForm = this.handleForm.bind(this)
    }
    handleForm(todo) {
        this.setState((st) => { return { todos: [...st.todos, todo] } })
    }
    render() {
        return (
            <div>
                <NewTodoForm handleForm={this.handleForm} />
                <Todo />
            </div>
        )
    }
}

export default TodoList;
