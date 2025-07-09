import { useState } from "react";

function TodoInput ({ onAdd }) {
    const [text, setText] = useState('');

    const handleTodo = (e) => {
        const newText = e.target.value;
        setText(newText);

    }

    const handleAddClick = () => {
        if (text.trim() === '') return;
        const upDated = {
            id: Date.now(),
            text,
            done: false,
        };
        onAdd(upDated);
        setText('');
    }


    return (
        <div>
            <input type="text" value={text} placeholder="할 일을 입력하세요" onChange={handleTodo}/>
            <button onClick={handleAddClick}>추가</button>
        </div>
    )

}

export default TodoInput;