import React from 'react';
import { Form } from './Form/Form';

export const NewExpense = ({ setNewExpense }) => {
    const onSaveData = data => {
        const savedData = {
            ...data
        };
        setNewExpense(savedData);
    };
    return (
        <div className="NewExpense">
            <Form onSaveData={onSaveData} />
        </div>
    );
};
