import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test(`should render ExpenseListFilters correctly`, () => {
    expect(wrapper).toMatchSnapshot();
});

test(`should render ExpenseListFilters with alt data correctly`, () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test(`should handle text changes`, () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test(`should sort by date`, () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalledWith(value);
});

test(`should sort by amount`, () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalledWith(value);
});

test(`should handle date changes`, () => {
    const startDateId = 'start';
    const endDateId = 'end';

    const startDate = moment();
    const endDate = moment().add(1, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDateId, endDateId, startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test(`should handle date focus changes`, () => {
    const startDateId = 'start';
    const endDateId = 'end';
    const focused = true;
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')( focused );
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});