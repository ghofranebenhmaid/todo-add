import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
   return (
      <div className='todo'>
         <div
            className='flex'
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
         >
            <div className='flex-center'>
               <button
                  className='todo__check flex'
                  onClick={() => completeTodo(index)}
               >
                  <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
                     <path
                        fill='none'
                        stroke='#FFF'
                        stroke-width='2'
                        d='M1 4.304L3.696 7l6-6'
                     />
                  </svg>
               </button>
               <p className='todo__text'>{todo.text}</p>
            </div>
            <div>
               <button onClick={() => removeTodo(index)}>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     width='18'
                     height='18'
                  >
                     <path
                        fill='#494C6B'
                        fill-rule='evenodd'
                        d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
                     />
                  </svg>
               </button>
            </div>
         </div>
         
      </div>
   );
};

export default Todo;
