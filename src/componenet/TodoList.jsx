import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
   const [todos, setTodos] = useState([
      {
         text: 'Learn about React',
         isCompleted: false,
      },
      {
         text: 'Meet friend for lunch',
         isCompleted: false,
      },
      {
         text: 'Build really cool todo app',
         isCompleted: false,
      },
   ]);

   const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
   };

   const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
   };

   const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
   };

   return (
      <div className='todo-container'>
         <div className='todo-title flex'>
            <div><h1>TODO</h1></div>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
            </div>
         </div>
         <TodoForm addTodo={addTodo} />
         <div className='todo-list'>
            {todos.map((todo, index) => (
               <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
               />
            ))}
         </div>
         <div className='todo-menu todo-list flex'>
            <p>items left</p>
            <div className='flex'>
               <p style={{marginRight: '15px'}}>All</p>
               <p style={{marginRight: '15px'}} >Active</p>
               <p>Completed</p>
            </div>
            <div className='flex' >

            <p style={{marginRight: '15px'}}>Clear </p>
            <p> Completed</p>
            </div>
         </div>
      </div>
   );
};

export default TodoList;
