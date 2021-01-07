import React from 'react';
import './App.scss';

import TodoList from './componenet/TodoList';

import bgDesktopDark from './assets/images/bg-desktop-dark.jpg';

function App() {
   return (
     <div className='app'
      
     >
             <img src={ bgDesktopDark} alt='bg desktop dark'/>

         <TodoList />
      </div>
   );
}

export default App;
