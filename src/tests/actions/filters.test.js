import moment from 'moment';
import { 
    setTextFilter, 
    sortByAmount, 
    setStartDate, 
    setEndDate, 
    sortByDate
} from '../../actions/filters';



test(`should generate set start date action objcet`, () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test(`should generate set end date action object`, () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


test(`should generate set text filter object with provided values`, () => {
    const action = setTextFilter('Some text');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Some text'
    });
});


test(`should generate object with no values`, () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test(`should generate sort by amount object`, () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});


test(`should generate sort by date object`, () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
