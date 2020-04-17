import React from 'react';
import Card from './Card';

function List(props) {
    return (
        <ul className="list">
            {props.data.map((contact, index) => (
                <Card
                    key={index}
                    id={index+1}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phoneNumber={contact.phoneNumber}
                    onDelete={() => props.onDelete(contact.id)}
                    onOpenEditor={() => props.onOpenEditor(index)}
                />
            ))}
        </ul>
    )
};

export default List;