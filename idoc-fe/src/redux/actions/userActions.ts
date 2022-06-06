import { userActionTypes } from "../actionTypes/index";
import axios from "axios";
import { data } from "../../sampleData/data";

let backendUrl = "http://localhost:8080/"

export const addUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_ADD_REQUEST });

  axios({
    method: 'post',
    url: `http://localhost:8080/user-management/user/add`,
    data: data,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    console.log(res)
    dispatch({
      type: userActionTypes.USER_ADD_SUCCEED,
      payload: res.data,
    });
  })
};

export const updateUser = (data: any) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_UPDATE_REQUEST });

  axios({
    method: 'put',
    url: `http://localhost:8080/user-management/user/modify/${data.epfNumber}`,
    data: data,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    dispatch({
      type: userActionTypes.USER_UPDATE_SUCCEED,
      payload: res.data,
    });
  })
};
export const getUsersList = () => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_DETAILS_GETTING_REQUEST });

    axios({
        method: 'get',
        url: `${backendUrl}user-management/user/list`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res: any)=>{
            dispatch({
                type: userActionTypes.USER_DETAILS_GETTING_SUCCEED,
                payload: res.data,
            });
        }).catch((e)=>{
        console.log(e)
    })

};

export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
  dispatch({type:userActionTypes.USER_DETAILS_GETTING_REQUEST});

  axios({
      method: 'post',
      url: `${backendUrl}user-management/user/list`,
      data: details,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          dispatch({
              type: userActionTypes.USER_DETAILS_GETTING_SUCCEED,
              payload: res.data,
          });
      }).catch((e)=>{
      console.log(e)
  })
}

export const userInactive = (epfNumber: string[]) => async (dispatch: any) => {
  dispatch({ type: userActionTypes.USER_INACTIVE_REQUEST });
  axios({
    method: 'put',
    url: `http://localhost:8080/user-management/user/${epfNumber}/inactive`,
    data: data,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    dispatch({
      type: userActionTypes.USER_INACTIVE_SUCCEED,
      payload: res.data,
    });
  })
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
