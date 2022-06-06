import { groupActionTypes } from "../actionTypes/index";
import axios from "axios"

export const getGroupList = () => async (dispatch: any) => {
  dispatch({ type: groupActionTypes.GROUP_DETAILS_GETTING_REQUEST });

  axios({
    method: 'get',
    url: `http://localhost:8080/group-management/group/list`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: groupActionTypes.GROUP_DETAILS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })
};


