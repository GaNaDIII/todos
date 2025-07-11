import './TodoItem.css';

function TodoItem ({ todo, onDelete, onToggle }) {

    const handleAddTogged = () => {
        onToggle(todo.id);
    }

    const handleDelete = () => {
        onDelete(todo.id);
    }

    return (
        <div className="todo-item-wrapper">
            <p>{todo.text}</p>
            <input type="checkbox" onChange={handleAddTogged} />
            <button className="delete-one-button" onClick={handleDelete}>삭제</button>
        </div>
    )

}

export default TodoItem;