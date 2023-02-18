import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItem";
import TitleBox from "./TitleBox";

const ToDoList = () => {
    return(
        <div className="container">
            <TitleBox/>
            <div className="todo-box">
                <TodoForm/>
                <TodoItems/>
            </div>
        </div>
    );
};

export default ToDoList;