import { login, logout} from '../../actions/auth'; 

test(`should set up auth login action`, () => {
    const uid = 'asdad';
    const result = login(uid);
    expect(result).toEqual({
        type: 'LOGIN',
        uid
    });
});

test(`should set up auth logout action`, () => {
    const result = logout();
    expect(result).toEqual({
        type: 'LOGOUT'
    });
});

