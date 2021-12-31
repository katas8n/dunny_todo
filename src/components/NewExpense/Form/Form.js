import React, { useState } from 'react';
import { Input } from '../../Input/Input';
import { Error } from '../../Error/Error';

import buttonStyled from '../../ExpenseItem/ExpenseItem.module.css';
import styled from './From.module.css';

export const Form = ({ onSaveData }) => {
    const [newExpense, setNewExpense] = useState({
        title: '',
        price: '',
        date: ''
    });

    const labelChangeHandler = e => {
        setNewExpense(prevState => {
            return { ...prevState, title: e.target.value };
        });
    };
    const amountChangeHandler = e => {
        setNewExpense(prevState => {
            return { ...prevState, price: e.target.value };
        });
    };
    const dateChangeHandler = e => {
        setNewExpense(prevState => {
            return { ...prevState, date: new Date(e.target.value) };
        });
    };
    const onSubmitHandler = e => {
        e.preventDefault();
        onSaveData(newExpense);

        setNewExpense({
            title: '',
            price: '',
            date: new Date()
        });
    };

    const inputs = [
        {
            label: 'Label',
            type: 'text',
            event: labelChangeHandler,
            value: newExpense.title
        },
        {
            label: 'Amount',
            step: 0.1,
            event: amountChangeHandler,
            value: newExpense.price
        },
        {
            label: 'Date',
            type: 'date',
            event: dateChangeHandler,
            value: newExpense.date
        }
    ];

    return (
        <form className="from" onSubmit={onSubmitHandler}>
            {inputs.map((input, i) => (
                <Input
                    key={i}
                    className={styled['form-input']}
                    label={input.label}
                    type={input.type}
                    onChangeHandler={input.event}
                    value={input.value}
                />
            ))}
            <Input
                className={`${buttonStyled.button} ${styled.btn}`}
                type="submit"
            />
        </form>
    );
};
