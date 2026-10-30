import './Interface.css'

import { TodoList } from "../TodoList/TodoList"

const Interface = () => {
    return (
        <section>
            <h1>ReacTodo</h1>
            <div>
                <div
                    className="todo-interface"
                >
                    <TodoList />
                </div>
            </div>
        </section>
    )
}

export default Interface