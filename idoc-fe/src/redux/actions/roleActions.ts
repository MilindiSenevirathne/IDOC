import { roleActionTypes } from "../actionTypes/index";
import axios from "axios"

export const getRolesList = () => async (dispatch: any) => {
  dispatch({ type: roleActionTypes.ROLE_DETAILS_GETTING_REQUEST });

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
          type: roleActionTypes.ROLE_DETAILS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })
};


