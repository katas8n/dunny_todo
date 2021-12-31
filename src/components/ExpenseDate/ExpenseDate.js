import React from 'react';

import styles from './ExpenseDate.module.css';

export const ExpenseDate = ({ date }) => {
    const day = date.toLocaleString('en-us', { month: 'long' });
    const month = date.toLocaleString('en-us', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className={styles['expense-date']}>
            <div className={styles['date']}>{day}</div>
            <div className={styles['date']}>{month}</div>
            <div className={styles['date']}>{year}</div>
        </div>
    );
};
