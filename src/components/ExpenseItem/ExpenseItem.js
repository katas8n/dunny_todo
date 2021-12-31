import React from 'react';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';

import styles from './ExpenseItem.module.css';

export const ExpenseItem = ({ expenses, onChangeTitle }) => {
    if (expenses.length > 0) {
        return expenses.map((expense, i) => (
            <Card key={i} className={styles['expense-item']}>
                <div className={styles['expense-title']}>{expense.title}</div>
                <div className={styles['expense-price']}>{expense.price}$</div>
                {console.log(expense.date)}
                <ExpenseDate date={expense.date} />
                <Button
                    id={i}
                    onClickHandler={e => onChangeTitle(e)}
                    className={styles.button}
                >
                    Delete
                </Button>
            </Card>
        ));
    } else {
        return <h1 className={styles.message}>Nothing here yet</h1>;
    }
};
