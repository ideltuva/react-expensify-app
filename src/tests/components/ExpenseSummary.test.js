import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test(`should correctly render with 1 expense`, () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot()
});

test(`should correctly render with multiple expenses`, () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={235232.32}/>);
    expect(wrapper).toMatchSnapshot()
});



