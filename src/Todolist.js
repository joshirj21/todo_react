import React, { Component } from 'react';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import uuid from "uuid/v4";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.handleForm = this.handleForm.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleForm(todo) {
        this.setState((st) => {
            let obj = { ...todo, id: uuid() }
            return { todos: [...st.todos, obj] }
        })
    }
    handleRemove(Id) {
        let arr = this.state.todos.filter((el) => el.id !== Id)
        this.setState({ todos: arr })
    }
    render() {
        return (
            <div>
                <NewTodoForm handleForm={this.handleForm} />
                <ul>
                    {this.state.todos.map((el) => <Todo text={el.todo} key={el.id} id={el.id} remove={this.handleRemove} />)}
                </ul>
            </div>
        )
    }
}

export default TodoList;
