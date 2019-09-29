import { USER_REGISTRATION_SUCCESS, USER_REGISTRATION_REQUEST, USER_REGISTRATION_FAILURE, UPDATE_USER_REGISTRATION } from "../constants"
import axios from 'axios'

const userRegistrationRequest = () => ({
    type: USER_REGISTRATION_REQUEST
})

const userRegistrationSuccess = data => ({
    type: USER_REGISTRATION_SUCCESS,
    data
})

const userRegistrationFail = error => ({
    type: USER_REGISTRATION_FAILURE,
    error
})

export const updateRegistrationDetails = (payload) => {
    return (dispatch) => {
        return dispatch({
            type : UPDATE_USER_REGISTRATION,
            ...payload
        })
    }
}

export const register = (payload) => {
    return async (dispatch) => {
        try {
            dispatch(userRegistrationRequest())
            let apiUrl = "http://localhost:3001/api/v1/user/register"
            let requestBody = {
                username: payload.username,
                email : payload.email,
                password: payload.password,
                phone : payload.phone
            }
            let headers = {
                headers: {
                    "Authorization": "Basic d2ViYXBwOllYSnFkVzQ2YUdWdGNtcGhZVzVw",
                    "Content-Type": "application/json"
                }
            }
            let {data} = await axios.post(apiUrl, requestBody, headers)
            if(data.success){
                dispatch(userRegistrationSuccess(data))
            }else{
                dispatch(userRegistrationFail(data.msg))
            }
        }
        catch (err) {
            console.log(err)
        }
    }
}
