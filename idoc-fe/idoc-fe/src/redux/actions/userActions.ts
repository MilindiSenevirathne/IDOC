import { userActionTypes } from "../actionTypes/index";
import { data } from "../../sampleData/data";
import axios from "axios";

export const userLogin = (loginData: any) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_LOGIN_REQUEST });

  axios({
    method: 'post',
    url: `http://localhost:8080/auth/login`,
    data: loginData
  })
      .then((res: any)=>{
        localStorage.setItem('token', res.headers.authorization)
        dispatch({
          type: userActionTypes.USER_LOGIN_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
        console.log(e)
  })
};


export const sendForgotPasswordLink =
  (email: string) => async (dispatch: (arg0: { type: any }) => void) => {
    dispatch({ type: userActionTypes.USER_FORGOT_PASSWORD_REQUEST });

    setTimeout(() => {
      dispatch({
        type: userActionTypes.USER_FORGOT_PASSWORD_SUCCEED,
      });
    }, 2000);
  };

export const userLogout =
  () => async (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: userActionTypes.USER_LOGOUT_REQUEST });

    setTimeout(() => {
      dispatch({
        type: userActionTypes.USER_LOGOUT_SUCCEED,
      });
    }, 2000);
  };

export const addUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_ADD_REQUEST });

  setTimeout(() => {
    dispatch({
      type: userActionTypes.USER_ADD_SUCCEED,
      payload: data,
    });
  }, 2000);
};

export const updateUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_UPDATE_REQUEST });

  setTimeout(() => {
    dispatch({
      type: userActionTypes.USER_UPDATE_SUCCEED,
      payload: data,
    });
  }, 2000);
};
export const getUsersList = () => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_DETAILS_GETTING_REQUEST });

  axios({
    method: 'get',
    url: `http://localhost:8080/user-management/user/list`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: userActionTypes.USER_DETAILS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })
};


export const userDelete = (id: string[]) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_DELETE_REQUEST });
  setTimeout(() => {
    dispatch({
      type: userActionTypes.USER_DELETE_SUCCEED,
      payload: id,
    });
  }, 2000);
  console.log(id);
};

export const userSearch = () => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_SEARCH_REQUEST });
  setTimeout(() => {
    dispatch({
      type: userActionTypes.USER_SEARCH_SUCCEED,
      payload: [
        { id: "1", username: "user 1" },
        { id: "2", username: "user 2" },
      ],
    });
  }, 2000);
};
