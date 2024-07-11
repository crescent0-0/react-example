import { useState } from "react";

function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();

        if (todo === ""){
            return;
        }
        setTodos((currentArray => [todo, ...currentArray]))
        setTodo("")
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Write your to do ..." value={todo} onChange={onChange}/>
            <button>Add to do</button>
        </form>
        <hr />
        <ul>{todos.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        
    </div>;
}

export default Todo;