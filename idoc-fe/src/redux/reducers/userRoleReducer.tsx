import {userRoleActionTypes} from '../actionTypes';
import produce from "immer";

const initialState = {
    userRoleDetails : null,
    allUserRoleDetails: {data:[], totalSize:0}
};



const userRoleData = produce((state = initialState, action: {type: any; payload: any;}) => {
    const {type, payload} = action;

    switch (type){
        case userRoleActionTypes.ADD_USERROLE_SUCCEED: {
                var data = payload;
                data.id = state.allUserRoleDetails.length+1
                state.allUserRoleDetails.push(data);
                return state;
        }
        
        case userRoleActionTypes.UPDATE_USERROLE_SUCCEED: {
                const updated_user_role_id = state.allUserRoleDetails.findIndex((item: { id: any; })=>item.id===payload.id);
                console.log(payload);
                state.allUserRoleDetails[updated_user_role_id]=payload; 
                return state;
        }
            
        
        case userRoleActionTypes.USERROLE_DETAILS_GETTING_SUCCEED: {
                state.allUserRoleDetails =  payload;
                return state;
        }

        case userRoleActionTypes.USERROLE_SEARCH_SUCCEED: {
                state.allUserRoleDetails = payload;
                return state;
        }


        case userRoleActionTypes.USERROLE_DELETE_SUCCEED: {
                for (let i = 0; i < payload.length; i++) {
                    const deleted_user_role_id = state.allUserRoleDetails.findIndex(
                    (item: { id: any }) => item.id === payload[i]
                    );
                    state.allUserRoleDetails.splice(deleted_user_role_id, 1);
                }
                return state;
        }

                    
        default:{
                return state;
        }
    }
});

export default userRoleData;
