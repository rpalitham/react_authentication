import { USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_FAILURE, UPDATE_USER_DETAILS, 
         USER_LOGOUT_REQUEST, USER_EMAIL_VALID, USER_EMAIL_FAILURE, USER_EMAIL_REQUEST, USER_LOGOUT_SUCCESS} from "../constants"
import axios from 'axios'

export const userLoginSuccess = data => ({
    type: USER_LOGIN_SUCCESS,
    data
})

export const userLoginFail = error => ({
    type: USER_LOGIN_FAILURE,
    error
})

export const userEmailFailure = () => ({
    type : USER_EMAIL_FAILURE
})

export const userLogoutSuccess = () => ({
    type : USER_LOGOUT_SUCCESS
})

export const updateLoginDetails = (payload) => {
    return (dispatch) => {
        return dispatch({
          type: UPDATE_USER_DETAILS,
          ...payload
        });
    }
}

export const isEmailValid = (email) => {
    return async (dispatch) => {
        dispatch({type: USER_EMAIL_REQUEST})
        try {
            dispatch({ type: USER_LOGIN_REQUEST })
            let apiUrl =
                "http://localhost:3001/api/v1/user/login";
            let requestBody = {
                email: email
            }
            let headers = {
                headers: {
                    "Authorization": "Basic d2ViYXBwOllYSnFkVzQ2YUdWdGNtcGhZVzVw",
                    "Content-Type": "application/json"
                }
            }
            let { data } = await axios.post(apiUrl, requestBody, headers)
            if (data.success) {
                dispatch({type : USER_EMAIL_VALID, data})
            } else {
                dispatch({type : USER_EMAIL_FAILURE});
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        try{
            dispatch({type: USER_LOGOUT_REQUEST})
            let {id, token } = getState.user
            let apiUrl = "http://localhost:3001/api/v1/user/logout";
            let headers = {
                headers : {
                    "Authorization": "Basic d2ViYXBwOllYSnFkVzQ2YUdWdGNtcGhZVzVw",
                    "Content-Type": "application/json",
                    "auth-token" : token
                }
            }
            let { data } = await axios.post(apiUrl, id, headers)
            if(data.success){
                dispatch(userLogoutSuccess())
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

export const login = (payload) => {
    return async (dispatch) => {
        try{
            dispatch({type: USER_LOGIN_REQUEST})
            let apiUrl =
              "http://localhost:3001/api/v1/user/login";
            let headers = {
                headers: {
                    "Authorization": "Basic d2ViYXBwOllYSnFkVzQ2YUdWdGNtcGhZVzVw",
                    "Content-Type": "application/json"
                }
            }
            let {data} = await axios.post(apiUrl, payload, headers)
            if(data.success){
                dispatch(userLoginSuccess(data))
            }else{
                dispatch(userLoginFail(data.msg));
            }
        }
        catch(err){
            console.log(err)
        }
    }
}


