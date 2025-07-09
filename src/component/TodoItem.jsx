
function TodoItem ({ todo, onDelete, onToggle }) {

    const handleAddTogged = () => {
        onToggle(todo.id);
    }

    const handleDelete = () => {
        onDelete(todo.id);
    }

    return (
        <div>
            <p>{todo.text}</p>
            <button onClick={handleDelete}>삭제</button>
            <input type="checkbox" onChange={handleAddTogged} />
        </div>
    )

}

export default TodoItem;