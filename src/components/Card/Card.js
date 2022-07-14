import React from "react";
import './Card.scss';
import { isEmpty } from "lodash";

function Card(props) {
    const { card } = props;

    return (
        <li className="card-item">
            {
                card.cover && <img src={card.cover} className='card-cover' alt="trello-clone-img" />
            }
            {card.title}
        </li>
    )
}

export default Card