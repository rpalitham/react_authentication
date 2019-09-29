import * as constants from "../constants"

const initialState = {
    authType : '', 
    email: "",
    password: "",
    userValid : false,
    token : "",
    username : "",
    id : "",
    error : false,
    showError: false,
    errorMessage: "",
    loading : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.UPDATE_USER_DETAILS:
            return {...state, ...action}

        case constants.USER_LOGIN_REQUEST:
            return state
        
        case constants.USER_LOGIN_SUCCESS:
            return { ...action.data}
        
        case constants.USER_LOGIN_FAILURE:
            return {...state, 
                error : true,
                showError: true,
                errorMessage: action.error
            }
        
        case constants.USER_EMAIL_REQUEST:
            return {...state, loading: true}
        
        case constants.USER_EMAIL_VALID:
            return {...state, userValid : true, loading : false}
        
        case constants.USER_EMAIL_FAILURE:
            return {...state, userValid: false, loading : false }
        
        case constants.USER_LOGOUT_REQUEST:
            return initialState

        default:
            return state
    }
}