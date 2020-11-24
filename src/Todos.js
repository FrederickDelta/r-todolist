const Todos = (props) => {
  let todos = props.todos;
  let deleteTodo = props.deleteTodo;

  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td
            className="has-text-weight-semibold"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td>
        <p className="is-size-4 has-text-danger has-text-weight-semibold has-text-centered">
          You have no todos left
        </p>
      </td>
    </tr>
  );
  return (
    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
      <tbody>{todoList}</tbody>
    </table>
  );
};

export default Todos;
