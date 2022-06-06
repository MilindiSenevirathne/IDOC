import { workflowActionTypes } from "../actionTypes/index";
import axios from "axios";


export const addWorkflow = (workflowdata: any) => async (dispatch: any) => {
  dispatch({ type: workflowActionTypes.ADD_WORKFLOW_REQUEST });

  axios({
    method: 'post',
    url: `http://localhost:8080/workflow-management/workflow/add`,
    data: workflowdata,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    console.log(res)
    dispatch({
      type: workflowActionTypes.ADD_WORKFLOW_SUCCEED,
      payload: res.data,
    });
  })
};

export const updateWorkflow = (workflowdata: any) => async (dispatch: any) => {
  dispatch({ type: workflowActionTypes.UPDATE_WORKFLOW_REQUEST });
console.log(workflowdata)
  axios({
    method: 'put',
    url: `http://localhost:8080/workflow-management/workflow/modify/${workflowdata.id}`,
    data: workflowdata,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    dispatch({
      type: workflowActionTypes.UPDATE_WORKFLOW_SUCCEED,
      payload: res.data,
    });
  })

};

export const getWorkflowList = () => async (dispatch: any) => {
  dispatch({ type: workflowActionTypes.WORKFLOW_DETAILS_GETTING_REQUEST });

  axios({
    method: 'get',
    url: `http://localhost:8080/workflow-management/workflow/list/all`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: workflowActionTypes.WORKFLOW_DETAILS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })
};

export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
  dispatch({type:workflowActionTypes.WORKFLOW_DETAILS_GETTING_REQUEST});

  axios({
      method: 'post',
      url: `http://localhost:8080/workflow-management/workflow/list/all`,
      data: details,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          dispatch({
              type: workflowActionTypes.WORKFLOW_DETAILS_GETTING_SUCCEED,
              payload: res.data,
          });
      }).catch((e)=>{
      console.log(e)
  })
}

export const workflowDelete = (workflowId: string[]) => async (dispatch: any) => {
  dispatch({ type: workflowActionTypes.WORKFLOW_DELETE_REQUEST });
  axios({
    method: 'put',
    url: `http://localhost:8080/workflow-management/workflow/delete/${workflowId}`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: workflowActionTypes.WORKFLOW_DELETE_SUCCEED,
          payload: res.workflowId,
        });
      }).catch((e)=>{
    console.log(e)
      })
};

export const workflowSearch = () => async (dispatch: any) => {
  dispatch({ type: workflowActionTypes.WORKFLOW_SEARCH_REQUEST });
  setTimeout(() => {
    dispatch({
      type: workflowActionTypes.WORKFLOW_SEARCH_SUCCEED,
      payload: [
        { id: "1", username: "user 1" },
        { id: "2", username: "user 2" },
      ],
    });
  }, 2000);
};
