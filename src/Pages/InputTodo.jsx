import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import Input from '../Comonents/Input';

const InputTodo = () => {

    const [addTask, setAddTask] = useState("");

    
  return (
    <>
        <div className="input">
          <Input value={addTask} setValue={setAddTask} />
        </div>
    </>
  )
}

export default InputTodo