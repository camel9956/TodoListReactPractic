import React from "react";

const TodoItems = () =>{
    return(
        <ul>
            <li>洗衣服 <span className="badge bg-red">生活</span><span class="close">X</span></li>
            <li>鐵人賽文章 <span className="badge bg-red">學習</span><span class="close">X</span></li>
        </ul>
    )
}

export default TodoItems;