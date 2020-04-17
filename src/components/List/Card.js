import React from 'react';

function Card(props) {
    return (
        <li className="card">
            {/* <div className="contact-title">Контакт №{props.id}</div> */}
            <div>Имя: {props.firstName}</div>
            <div>Фамилия: {props.lastName}</div>
            <div>Телефон: {props.phoneNumber}</div>
            <div>
                <button onClick={props.onOpenEditor}>edit</button>
                <button onClick={props.onDelete}>delete</button>
            </div>
        </li>
    )
}

export default Card;