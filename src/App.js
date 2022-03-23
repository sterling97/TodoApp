// import logo from './logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortarme el cabello', completed: false },
  { text: 'Terminar el curso de React', completed: false },
];

function App() {
  return (
    <React.Fragment>
      {<TodoCounter />}
          
      <TodoSearch />
      
      <TodoList>
        { todos.map(todo => (
          <TodoItem key={todo.text} text = {todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>

  );
}

export default App;
