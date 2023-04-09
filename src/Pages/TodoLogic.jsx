import React from 'react';
import InputTodo from './InputTodo';
import TodoLists from './TodoLists';

const TodoLogic = () => {
  return (
    <>
        <div className="lists">
            <InputTodo />
            <TodoLists />
        </div>
    </>
  )
}

export default TodoLogic