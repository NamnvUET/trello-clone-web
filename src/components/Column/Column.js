import React from "react";
import './Column.scss';
import Task from "components/Task/Task";

function Column() {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className="task-list">
                <Task/>
                <li className="task-item">
            <img src="img/img_demo.jpg" alt="trello-clone-img" />
            Title: CCS_CN96
        </li><li className="task-item">
            <img src="img/img_demo.jpg" alt="trello-clone-img" />
            Title: CCS_CN96
        </li><li className="task-item">
            <img src="img/img_demo.jpg" alt="trello-clone-img" />
            Title: CCS_CN96
        </li><li className="task-item">
            <img src="img/img_demo.jpg" alt="trello-clone-img" />
            Title: CCS_CN96
        </li><li className="task-item">
            <img src="img/img_demo.jpg" alt="trello-clone-img" />
            Title: CCS_CN96
        </li>
            </ul>
            <footer>Add another card</footer>
        </div>
    )
}

export default Column