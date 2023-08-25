const loginStart = (userCredentials) => {
    return ({
        type: "LOGIN_START"
    })
}

const loginSuccess = (user) => {
    return({
        type: "LOGIN_SUCCESS",
        payload: user
    })
}

const loginFailure = (error) => {
    return({
        type: "LOGIN_FAILURE",
        payload: error
    })
}

export {loginFailure, loginStart, loginSuccess}