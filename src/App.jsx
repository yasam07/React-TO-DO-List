import { useState } from 'react';

function App() {
  // State to store the list of to-dos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Add a new to-do
  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput(''); // Clear the input field
    }
  };

  // Handle deleting a to-do
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>this is todo list</h1>

      {/* Input field */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      {/* To-Do list */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
