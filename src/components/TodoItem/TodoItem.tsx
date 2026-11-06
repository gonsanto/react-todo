import './TodoItem.css';
import type { Todos } from './types';
import { constants } from '../../constants';
const { todoItemClassName } = constants;

export const TodoItem = ({ title }: Todos) => {
  return <li className={todoItemClassName}>{title}</li>;
};
