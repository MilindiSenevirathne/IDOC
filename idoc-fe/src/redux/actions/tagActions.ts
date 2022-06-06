import {tagActionTypes} from '../actionTypes';
import axios from "axios";
let backendUrl = "http://localhost:8080/"

export const addTag = (tag: { name: string; color: any, parentTag_id?:any }) => async (dispatch: any) => {
    dispatch({type: tagActionTypes.TAG_ADD_REQUEST});
    console.log(tag);
    axios({
        method: 'post',
        url: `http://localhost:8080/tag-management/tag/add`,
        data: tag,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: tagActionTypes.TAG_ADD_SUCCEED,
          payload: res.data,
        });
    })   
};

export const updateTag = (tag: any) => async (dispatch: any) => {
    dispatch({type: tagActionTypes.TAG_UPDATE_REQUEST});
    axios({
        method: 'put',
        url: `http://localhost:8080/tag-management/tag/modify/${tag.id}`,
        data: tag,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: tagActionTypes.TAG_UPDATE_SUCCEED,
          payload: res.data,
        });
       // console.log(res.data);
      })

};

export const getTagDetails=()=>async(dispatch: any)=>{
    dispatch({type:tagActionTypes.TAG_DETAILS_GETTING_REQUEST});

    axios({
        method: 'get',
        url: `http://localhost:8080/tag-management/tag/list`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res: any)=>{
            console.log(res)
            dispatch({
                type: tagActionTypes.TAG_DETAILS_GETTING_SUCCEED,
                payload: res.data,
            });
        }).catch((e)=>{
    })
}

export const getChildrenTagDetails=(tag:any)=>async(dispatch: any)=>{
  dispatch({type:tagActionTypes.CHILDREN_TAG_DETAILS_GETTING_REQUEST});

  axios({
      method: 'get',
      url: `http://localhost:8080/tag-management/tag/children/${tag.id}`,
      data: tag,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          console.log(res)
          let data = {
            data: res.data,
            parent: tag.id
          }
          dispatch({
              type: tagActionTypes.CHILDREN_TAG_DETAILS_GETTING_SUCCEED,
              payload: data,
          });
      }).catch((e)=>{
  })
}

// export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
//   dispatch({type:tagActionTypes.TAG_DETAILS_GETTING_REQUEST});

//   axios({
//       method: 'post',
//       url: `http://localhost:8080/tag-management/tag/list`,
//       data: details,
//       headers: {
//           "Authorization": `Bearer ${localStorage.getItem('token')}`
//       }
//   })
//       .then((res: any)=>{
//           dispatch({
//               type: tagActionTypes.TAG_DETAILS_GETTING_SUCCEED,
//               payload: res.data,
//           });
//       }).catch((e)=>{
//       console.log(e)
//   })
// }

export const tagDelete=(selected: String)=>async(dispatch: any)=>{
    dispatch({type:tagActionTypes.TAG_INACTIVE_REQUEST});
    axios({
        method: 'delete',
        url: `http://localhost:8080/tag-management/tag/delete/${selected}`,
        data: selected,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res: any)=>{
        dispatch({
          type: tagActionTypes.TAG_INACTIVE_SUCCEED,
          payload: res.data.id,
        });
      })
}

export const tagSearch=()=>async(dispatch: any)=>{
    dispatch({type:tagActionTypes.TAG_SEARCH_REQUEST});
    setTimeout(()=>{
        dispatch({
            type:tagActionTypes.TAG_SEARCH_SUCCEED,
            payload:[
                {id:"1",name:"Group 1"},
                {id:"2", name:"Group 2"}
            ]
        });
    },2000)
}


