const initialstate = {
    user: { email: '', password: '', isAuthenticated: false }
}

export default function reducer(state = initialstate, action) {
    if (action.type === 'LOGIN') {
        state.user = action.payload
        state.user.isAuthenticated = true;
    }
    else if (action.type === 'SIGN_IN') {

    }
    else if (action.type === 'LOG_OUT') {
        state.user = action.payload
        state.user.isAuthenticated = false;
    }
    return state

}