import React, { Component } from 'react';
import "./Todolist.css"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import uuid from "uuid/v4";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.handleForm = this.handleForm.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
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
    handleEdit(val, id) {
        let updatedTodos = this.state.todos.map((el) => {
            if (el.id === id) {
                return { ...el, todo: val }
            }
            else {
                return el;
            }
        })
        this.setState({ todos: [...updatedTodos] })
    }
    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                <ul className="lis">
                    {this.state.todos.map((el) => <Todo text={el.todo} key={el.id} id={el.id} remove={this.handleRemove} edit={this.handleEdit} />)}
                </ul>
                <NewTodoForm handleForm={this.handleForm} />
            </div>
        )
    }
}

export default TodoList;
