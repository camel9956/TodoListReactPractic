import React from "react";

const TodoForm = () => {
    return(
        <form class="header">
            <input type="text" id="input" placeholder="New Item..."/>
            <button type="submit" class="addBtn">add</button>
        </form>
    )
}

export default TodoForm;