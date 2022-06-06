import { companyActionTypes } from "../actionTypes/index";
import { companydata } from "../../sampleData/companydata";
import axios from "axios";


export const addCompany = (companydata: any) => async (dispatch: any) => {
  dispatch({ type: companyActionTypes.ADD_COMPANY_REQUEST });

  axios({
    method: 'post',
    url: `http://localhost:8080/system-configuration/company-management/company-registration/create`,
    data: companydata,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    console.log(res)
    dispatch({
      type: companyActionTypes.ADD_COMPANY_SUCCEED,
      payload: res.data,
    });
  })
};

export const updateCompany = (companydata: any) => async (dispatch: any) => {
  dispatch({ type: companyActionTypes.UPDATE_COMPANY_REQUEST });

  axios({
    method: 'put',
    url: `http://localhost:8080/system-configuration/company-management/company-registration/modify/${companydata.companyId}`,
    data: companydata,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((res: any)=>{
    dispatch({
      type: companyActionTypes.UPDATE_COMPANY_SUCCEED,
      payload: res.data,
    });
  })

};
export const getCompanyList = () => async (dispatch: any) => {
  dispatch({ type: companyActionTypes.COMPANY_DETAILS_GETTING_REQUEST });

  axios({
    method: 'get',
    url: `http://localhost:8080/system-configuration/company-management/company-registration/list`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: companyActionTypes.COMPANY_DETAILS_GETTING_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
  })

};

export const getPaginatedList=(details: any)=>async(dispatch: any)=>{
  dispatch({type:companyActionTypes.COMPANY_DETAILS_GETTING_REQUEST});

  axios({
      method: 'post',
      url: `http://localhost:8080/system-configuration/company-management/company-registration/list`,
      data: details,
      headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
  })
      .then((res: any)=>{
          dispatch({
              type: companyActionTypes.COMPANY_DETAILS_GETTING_SUCCEED,
              payload: res.data,
          });
      }).catch((e)=>{
      console.log(e)
  })
}

export const companyDelete = (companyId: string[]) => async (dispatch: any) => {
  dispatch({ type: companyActionTypes.COMPANY_DELETE_REQUEST });
  axios({
    method: 'put',
    url: `http://localhost:8080/system-configuration/company-management/company-registration/${companyId}/inactive`,
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
      .then((res: any)=>{
        console.log(res)
        dispatch({
          type: companyActionTypes.COMPANY_DELETE_SUCCEED,
          payload: res.data,
        });
      }).catch((e)=>{
    console.log(e)
      })
};

export const getActiveUsers = (companyId: string[]) => async (dispatch: any) =>{
  dispatch({type:companyActionTypes.COMPANY_ACTIVE_USERS_GETTING_REQUEST});
  setTimeout(()=>{
    dispatch({
      type:companyActionTypes.COMPANY_ACTIVE_USERS_GETTING_SUCCEED,
      payload: companydata
    })
  },2000);
}


export const companySearch = () => async (dispatch: any) => {
  dispatch({ type: companyActionTypes.COMPANY_SEARCH_REQUEST });
  setTimeout(() => {
    dispatch({
      type: companyActionTypes.COMPANY_SEARCH_SUCCEED,
      payload: [
        { id: "1", username: "user 1" },
        { id: "2", username: "user 2" },
      ],
    });
  }, 2000);
};
