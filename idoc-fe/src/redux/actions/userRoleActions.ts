import { userRoleActionTypes } from "../actionTypes/index";
import axios from "axios";


export const addUserRole = (userroledata: any) => async (dispatch: any) => {
  dispatch({ type: userRoleActionTypes.ADD_USERROLE_REQUEST });

  axios({
    method: 'post',
    url: `http://localhost:8080/user-management/role-and-permission/add`,
    data: userroledata,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    console.log(res)
    dispatch({
      type: userRoleActionTypes.ADD_USERROLE_SUCCEED,
      payload: res.data,
    });
  })
};

export const updateUserRole = (userroledata: any) => async (dispatch: any) => {
  dispatch({ type: userRoleActionTypes.UPDATE_USERROLE_REQUEST });

  axios({
    method: 'put',
    url: `http://localhost:8080/user-management/role-and-permission/modify/${userroledata.id}`,
    data: userroledata, 
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    dispatch({
      type: userRoleActionTypes.UPDATE_USERROLE_SUCCEED,
      payload: res.data,
    });
  })

};
export const getUserRoleList = () => async (dispatch: any) => {
  dispatch({ type: userRoleActionTypes.USERROLE_ACTIVE_USERS_GETTING_REQUEST });

  axios({
    method: 'get',
    url: `http://localhost:8080/user-management/role-and-permission/list`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: userRoleActionTypes.USERROLE_ACTIVE_USERS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })

};

export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
  dispatch({type:userRoleActionTypes.USERROLE_DETAILS_GETTING_REQUEST});

  axios({
      method: 'post',
      url: `http://localhost:8080/user-management/role-and-permission/list`,
      data: details,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          dispatch({
              type: userRoleActionTypes.USERROLE_DETAILS_GETTING_SUCCEED,
              payload: res.data,
          });
      }).catch((e)=>{
      console.log(e)
  })
}

export const userRoleDelete = (id: string) => async (dispatch: any) => {
  dispatch({ type: userRoleActionTypes.USERROLE_DELETE_REQUEST });
  axios({
    method: 'put',
    url: `http://localhost:8080/user-management/role-and-permission/${id}/inactive`,
    headers: {  
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: userRoleActionTypes.USERROLE_DELETE_SUCCEED,
          payload: res.id,
        });
      }).catch((e)=>{
    console.log(e)
      })
};

export const userRoleActivate = (id: string) => async (dispatch: any) => {
    dispatch({ type: userRoleActionTypes.USERROLE_DELETE_REQUEST });
    axios({
        method: 'put',
        url: `http://localhost:8080/user-management/role-and-permission/${id}/active`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res: any)=>{
            console.log(res)
            dispatch({
                type: userRoleActionTypes.USERROLE_DELETE_SUCCEED,
                payload: res.id,
            });
        }).catch((e)=>{
        console.log(e)
    })
};

export const userRoleSearch = () => async (dispatch: any) => {
  dispatch({ type: userRoleActionTypes.USERROLE_SEARCH_REQUEST });
  setTimeout(() => {
    dispatch({
      type: userRoleActionTypes.USERROLE_SEARCH_SUCCEED,
      payload: [
        { id: "1", username: "user 1" },
        { id: "2", username: "user 2" },
      ],
    });
  }, 2000);
};
