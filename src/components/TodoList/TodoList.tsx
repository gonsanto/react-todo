import './TodoList.css';
import type { Todos } from '../TodoItem/types';

import { use, useState } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

import { constants } from '../../constants';
const { fetchUrl, noTaskText, todoListKey, todoListClassName } = constants;

let fetchTodos: Promise<Todos[]> | null = null;
function getTodos() {
  if (!fetchTodos) {
    fetchTodos = fetch(fetchUrl).then((todos) => todos.json());
  }
  return fetchTodos;
}

export const TodoList = () => {
  const initialTodos: Todos[] = use(getTodos());

  const [todos, setTodos] = useState<Todos[]>(initialTodos);

  if (todos.length < 1) {
    return <p>{noTaskText}</p>;
  } else {
    return (
      <ul key={todoListKey} className={todoListClassName}>
        {todos.map((t) => (
          <TodoItem key={t.id} title={t.title} />
        ))}
      </ul>
    );
  }
};
