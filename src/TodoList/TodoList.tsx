import './TodoList.css'
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
    return (
        <ul 
        id="todo-list"
        className="todo-list"
        >
            <TodoItem title="First task"/>
            <TodoItem title="Second task"/>
            <TodoItem title="Third task"/>
            <TodoItem title="Fourth task"/>
        </ul>
    );
}