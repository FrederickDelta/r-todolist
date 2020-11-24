import React from "react";
import "./App.css";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todos: [],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  };
  addTodo = (todo) => {
    todo.id = uuidv4();
    let todos = [...this.state.todos, todo];
    this.setState({ todos: todos });
  };
  render() {
    return (
      <div className="App">
        <div className="container is-fluid">
          <div className="columns is-centered">
            <div className="column is-10-tablet is-8-desktop is-6-widescreen">
              <h1 className="is-size-1 has-text-weight-bold has-text-primary-dark has-text-centered">
                Todos
              </h1>
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
              <AddTodo addTodo={this.addTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
