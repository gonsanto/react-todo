import './TodoItem.css'

interface TypeName {
    title: string;
}

export const TodoItem = ({title}: TypeName) => {
    return (
        <li 
        className="todo-item"
        >
            {title}
        </li>
    )
}