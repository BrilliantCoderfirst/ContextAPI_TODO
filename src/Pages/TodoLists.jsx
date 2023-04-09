import React, { useContext } from "react";
import { UserContext } from "../App";
import TodoItems from "./TodoItems";

const TodoLists = () => {

    const { task } = useContext(UserContext);

  return (
    <>
      <div className="lists">
        <div className="items">
            {
                task.map((items, index) => <TodoItems key={index+1} {...items}  />)
            }
          
        </div>
      </div>
    </>
  );
};

export default TodoLists;
