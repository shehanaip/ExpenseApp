import React, { useState } from 'react';
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangedHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const FilteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
            <ExpensesChart expenses={FilteredExpenses}/>
            <ExpensesList items={FilteredExpenses}/>
        </Card>
    );
};

export default Expenses;
