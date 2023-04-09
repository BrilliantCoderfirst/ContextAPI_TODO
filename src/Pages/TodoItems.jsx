import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const TodoItems = ({id, task, complete}) => {

  const { isEdit, isDelete, isCompleted } = useContext(UserContext);

  const [active, setActive] = useState(false);
  const [upDateValue, setUpDateValue] = useState(task);


  function editFun(id) {
    isEdit(id, upDateValue);
    setActive(!active);
  }


  function deleteFun() {
    isDelete(id)
  }


  const completeFun = (e) => isCompleted(id, e.target.checked);


  return (
    <>
      <div className={active ? "unDisplay" : "card"}>
        <div className="leftCard">
          <input type="checkbox" name="" id="" onChange={completeFun} />
          <p className={complete ? "completedTask" : ""}>{task}</p>
        </div>
        <div className="rightCard">
          <span className="material-symbols-outlined" style={{cursor: "pointer"}} onClick={() => setActive(!active)}>border_color</span>
          <i className="fa-solid fa-trash" onClick={() => deleteFun(id)} style={{ color: "#5c5c5c" }}></i>
        </div>
      </div>

      <div className={active ? "upDateData" : "unDisplay"}>
        <input type="text" value={upDateValue} onChange={(e) => setUpDateValue(e.target.value)} />
        <button onClick={() => editFun(id)}>Update</button>
      </div>

    </>
  );
};

export default TodoItems;
