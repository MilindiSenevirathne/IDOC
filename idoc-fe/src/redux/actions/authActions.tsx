import axios from "axios";

import {authActionTypes} from "../actionTypes/index";
import {parseJwt} from "../../utils/jwtReader";

let backendUrl = "http://localhost:8080/"

export const userLogin = (loginData: any) => async (dispatch: any) => {
    dispatch({type: authActionTypes.USER_LOGIN_REQUEST});

    axios({
        method: 'post',
        url: `${backendUrl}auth/login`,
        data: loginData
    })
        .then((res: any) => {
            localStorage.setItem('token', res.headers.authorization)
            dispatch({
                type: authActionTypes.USER_LOGIN_SUCCEED,
                payload: res.data,
            });
        }).catch((e) => {
        console.log(e)
    })
};

export const sendForgotPasswordLink = (email: string) => async (dispatch: any) => {
    dispatch({type: authActionTypes.USER_FORGOT_PASSWORD_REQUEST});

    axios({
        method: 'post',
        url: `${backendUrl}auth/reset-password/${email}`,
    })
        .then((res: any) => {
            location.replace('/')
            dispatch({
                type: authActionTypes.USER_FORGOT_PASSWORD_SUCCEED,
                payload: res.data,
            });
        }).catch((e) => {
        dispatch({
            type: authActionTypes.USER_FORGOT_PASSWORD_FAILED,
            payload: e,
        });
    })
};

export const userLogout = () => async (dispatch: any) => {
    dispatch({type: authActionTypes.USER_LOGOUT_REQUEST});

    let userObj = parseJwt(localStorage.getItem('token'))
    const header = {
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
    }
    axios({
        method: 'put',
        url: `${backendUrl}auth/logout/${userObj.sub}`,
        headers: header
    })
        .then((res: any) => {
            dispatch({
                type: authActionTypes.USER_LOGOUT_SUCCEED,
                payload: res.data,
            });
            localStorage.removeItem('token')
            location.reload()
        }).catch((e) => {
        dispatch({
            type: authActionTypes.USER_LOGOUT_FAILED,
            payload: e,
        });
    })

};
