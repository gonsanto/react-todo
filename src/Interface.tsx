interface TypeName {
    title: string;
}

const TodoList = () => {
    return (
        <ul>
            <TodoItem title="First task"/>
            <TodoItem title="Second task"/>
            <TodoItem title="Third task"/>
            <TodoItem title="Fourth task"/>
        </ul>
    );
}

export const TodoItem = ({title}: TypeName) => {
    return (
        <li>
            {title}
        </li>
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