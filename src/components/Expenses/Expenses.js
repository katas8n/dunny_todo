import React, { useState } from 'react';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

import styled from './Expenses.module.css';

export const Expenses = ({ expenses, onClickChangeNameHandler }) => {
    const onChangeTitle = e => {
        onClickChangeNameHandler(e.target);
    };

    return (
        <div className={styled.expenses}>
            <ExpenseItem
                className={styled.expense}
                onChangeTitle={onChangeTitle}
                expenses={expenses}
            />
        </div>
    );
};
