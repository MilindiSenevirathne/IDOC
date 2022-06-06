import axios from "axios";

import { packageActionTypes } from "../actionTypes/index";

export const getPackageList = () => async (dispatch: any) => {
    dispatch({ type: packageActionTypes.PACKAGE_DETAILS_GETTING_REQUEST });

    axios({
        method: 'get',
        url: `http://localhost:8080/system-configuration/package/list`,
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res: any)=>{
            console.log(res)
            dispatch({
                type: packageActionTypes.PACKAGE_DETAILS_GETTING_SUCCEED,
                payload: res.data,
            });
        }).catch((e)=>{
        dispatch({
            type: packageActionTypes.PACKAGE_DETAILS_GETTING_FAILED,
            payload: e,
        });
    })
};

