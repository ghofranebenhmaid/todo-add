import React, { useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
    
   return (
      <div className='form'>
         <form className='flex'  onSubmit={ handleSubmit }>
            <span className='cercle'></span>
      <input
        type="text"
           className="input"
           placeholder="iswij swojojsowj"
        value={value}
           onChange={ e => setValue(e.target.value) }
           
      />
    </form>
      </div>
   );
};

export default TodoForm;
