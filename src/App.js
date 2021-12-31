import { useState } from 'react';

import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

import './App.css';
import styles from './App.module.css';

function App() {
    const setNewExpense = expense => {
        const newExpense = {
            ...expense
        };
        setExpenses(prevState => {
            return [newExpense, ...prevState];
        });
        console.log(expenses);
    };
    const onClickChangeNameHandler = e => {
        const newExpenses = expenses.filter((elem, index) => {
            if (+e.id !== index) {
                console.log('HEllo');
                return elem;
            }
        });
        setExpenses(newExpenses);
    };
    const [expenses, setExpenses] = useState([
        {
            date: new Date(2019, 33, 1),
            title: 'New car',
            price: '2323'
        },
        {
            date: new Date(2020, 13, 9),
            title: 'World map',
            price: '2313'
        },
        {
            date: new Date(2018, 23, 3),
            title: 'Oreder of cards',
            price: '2333'
        }
    ]);
    return (
        <div className={styles.app}>
            <NewExpense setNewExpense={setNewExpense} />
            <Expenses
                expenses={expenses}
                onClickChangeNameHandler={onClickChangeNameHandler}
            />
        </div>
    );
}

export default App;
