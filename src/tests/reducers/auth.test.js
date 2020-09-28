import authReducer from '../../reducers/auth';

test(`should setup logout reducer correctly`, () => {
    const state = {};
    const uid = 'random11';
    const action = {
        type: 'LOGIN',
        uid: uid
    };

    const result = authReducer(state, action);
    expect(result).toEqual({
        uid
    });
});

test(`should setup logout reducer correctly`, () => {
    const state = {};
    const uid = 'random11';
    const action = {
        type: 'LOGOUT',
        uid: uid
    };

    const result = authReducer(state, action);
    expect(result).toEqual({});
});