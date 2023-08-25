const LOGIN_START = "LOGIN_START"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILURE = "LOGIN_FAILURE"

const AuthReducer = (state, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false
            }
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};

export { AuthReducer };
