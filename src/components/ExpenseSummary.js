import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div>
        <p> -- </p>
        <p> Expense count: { props.expenses.length }  </p>
        <p> Total sum: { numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00') }  </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);