const TodoList = () => {
  return (
    <ul>
      <TodoItem />
    </ul>
  );
}

export const TodoItem = () => {
    return (
        <li
        ></li>
    )
}

const Interface = () => {
  return (
    <section>
        <h1>ReacTodo</h1>
        <div>
          <div>
            <TodoList />
          </div>
        </div>
      </section>
  )
}

export default Interface