import { userGroupActionTypes } from "../actionTypes";
import { data } from "../../sampleData/Groupdata";
import axios from "axios";
let backendUrl = "http://localhost:8080/"

export const addUserGroup = (group: { name: string; parentGroup_id?:any }) => async (dispatch: any) => {
    dispatch({type: userGroupActionTypes.ADD_USER_GROUP_REQUEST});
    console.log(group);
    axios({
        method: 'post',
        url: `http://localhost:8080/group-management/group/add`,
        data: group,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: userGroupActionTypes.ADD_USER_GROUP_SUCCEED,
          payload: res.data,
        });
    })   
};

export const updateUserGroup = (group: any) => async (dispatch: any) => {
    dispatch({type: userGroupActionTypes.UPDATE_USER_GROUP_REQUEST});
    axios({
        method: 'put',
        url: `http://localhost:8080/group-management/group/modify/${group.id}`,
        data: group,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: userGroupActionTypes.UPDATE_USER_GROUP_SUCCEED,
          payload: res.data,
        });
       // console.log(res.data);
      })

};

export const getUserGroupList=(search: any)=>async(dispatch: any)=>{
    dispatch({type:userGroupActionTypes.USER_GROUP_DETAILS_GETTING_REQUEST});

    axios({
        method: 'post',
        url: `http://localhost:8080/group-management/group/list`,
        data: search,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res: any)=>{
            dispatch({
                type: userGroupActionTypes.USER_GROUP_DETAILS_GETTING_SUCCEED,
                payload: res.data,
            });
        }).catch((e)=>{
        console.log(e)
    })
}

export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
  dispatch({type:userGroupActionTypes.USER_GROUP_DETAILS_GETTING_REQUEST});

  axios({
      method: 'post',
      url: `http://localhost:8080/group-management/group/list`,
      data: details,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          dispatch({
              type: userGroupActionTypes.USER_GROUP_DETAILS_GETTING_SUCCEED,
              payload: res.data,
          });
      }).catch((e)=>{
      console.log(e)
  })
}

export const userGroupDelete=(selected: String)=>async(dispatch: any)=>{
    dispatch({type:userGroupActionTypes.USER_GROUP_DELETE_REQUEST});
    axios({
        method: 'put',
        url: `http://localhost:8080/group-management/group/${selected}/inactive`,
        data: selected,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: userGroupActionTypes.USER_GROUP_DELETE_SUCCEED,
          payload: res.data.id,
        });
      })
}

export const userGroupSearch=()=>async(dispatch: any)=>{
    dispatch({type:userGroupActionTypes.USER_GROUP_SEARCH_REQUEST});
    setTimeout(()=>{
        dispatch({
            type:userGroupActionTypes.USER_GROUP_SEARCH_SUCCEED,
            payload:[
                {id:"1",name:"Group 1"},
                {id:"2", name:"Group 2"}
            ]
        });
    },2000)
}
