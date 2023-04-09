import React, { useContext } from 'react';
import { UserContext } from '../App';

const Input = ({value, setValue}) => {

  const { isAddTask } = useContext(UserContext);


  function addTaskFun(e) {
    e.preventDefault();
    isAddTask(value);
    setValue("");
}


  return (
    <>
      <div className="inputField">
        <input type="text" placeholder='Add Todo...' value={value} onChange={(e) => setValue(e.target.value)} />
        <i className="fa-solid fa-circle-plus" onClick={addTaskFun} style={{ color: "#5c5c5c", cursor: "pointer" }}></i>
      </div>
    </>
  )
}

export default Input