import { useState } from 'react'
import styled from 'styled-components';

const TodoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const TodoTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const TodoButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TodoListUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoListItem = styled.li`
  padding: 8px;
  margin-bottom: 4px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;

const TodoList = () => {
  const [todoInput, setTodoInput] = useState(''); // Input içeriği
  const [todos, setTodos] = useState([]); // Alınacaklar listesi

  // Input değeri değiştiğinde çağrılır
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  // Yeni bir hedef ekler
  function handleAddTodo() {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  // Belirtilen hedefi kaldırır
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContainer>
     <TodoTitle>Alınacaklar Listesi</TodoTitle>
      <div>
        <TodoInput
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          placeholder="Hedefi yazın..."
        />
        <TodoButton  onClick={handleAddTodo}>Ekle</TodoButton>
      </div>
      <TodoListUl>
        {todos.map((todo, index) => (
          <TodoListItem  key={index} onClick={() => handleRemoveTodo(index)}>
            {todo}
          </TodoListItem>
        ))}
      </TodoListUl>
    </TodoContainer>
  );
};

export default TodoList;
