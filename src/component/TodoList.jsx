import TodoItem from "./TodoItem";

function TodoList ({ todos, onDelete, onToggle }) {
    return (
        <div>
            <ol>
                {todos.map((todo) => (
                    <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}/>))}
            </ol>
        </div>
    )
}

export default TodoList;