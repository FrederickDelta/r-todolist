import React from "react";

class AddTodo extends React.Component {
  state = {
    content: "",
  };
  textChangeHandler = (e) => {
    this.setState({ content: e.target.value });
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.content !== "") {
      this.props.addTodo(this.state);
      this.setState({ content: "" });
    }
  };
  render() {
    return (
      <div className="field mt-6">
        <form onSubmit={this.formSubmitHandler}>
          <label className="label is-size-4 has-text-info-dark">
            Add new todo:
          </label>
          <p className="control has-icons-left">
            <input
              type="text"
              className="input"
              value={this.state.content}
              onChange={this.textChangeHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-list"></i>
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default AddTodo;
