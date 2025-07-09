import { useState } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (newTodo) => {
    setTodos([...todos, newTodo]);
    console.log(todos);
  }

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? {...todo, done: !todo.done} : todo)));
  }

  const handleAllDelete = () => {
    setTodos([]);
  }

  return (
    <>
    <TodoInput onAdd={(newTodo) => addTodos(newTodo)}/>
    <button onClick={handleAllDelete}>전체삭제</button>
    <TodoList todos={todos} onDelete={(id) => deleteTodos(id)} onToggle={(id) => toggleTodo(id)}/>
    </>
  )
}

export default App
