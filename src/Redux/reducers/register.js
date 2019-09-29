import * as constants from "../constants"

const initialState = {
    username: "",
    email: "",
    phone : "",
    password: "",
    showError: false,
    errorMessage: "",
    loading : false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.UPDATE_USER_REGISTRATION:
            return {...state, ...action}

        case constants.USER_REGISTRATION_REQUEST:
            return { ...state, loading : true}

        case constants.USER_REGISTRATION_SUCCESS:
            return {...state, ...action.data, loading : false }

        case constants.USER_REGISTRATION_FAILURE:
            return { ...state, 
                errorMessage: action.error,
                showError: true,
                error: true,
                loading : false
            }

        default:
            return state
    }
}