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
            <button className="delete-one-button" onClick={handleDelete}>삭제</button>
            <input type="checkbox" onChange={handleAddTogged} />
        </div>
    )

}

export default TodoItem;