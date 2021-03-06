import { userGroupActionTypes } from "../actionTypes";
import produce from "immer";

const initialState = {
    userGroupDetails : null,
    allUserGroupDetails: {data:[], totalSize:0}
};



const userGroupData = produce((state = initialState, action: {type: any; payload: any;}) => {
    const {type, payload} = action;

    switch (type){
        case userGroupActionTypes.ADD_USER_GROUP_SUCCEED: {
                var data = payload;
                state.allUserGroupDetails.data.push(data);
                state.allUserGroupDetails.totalSize++;
                return state;
        }
        
        case userGroupActionTypes.UPDATE_USER_GROUP_SUCCEED: {
                const updated_group_id = state.allUserGroupDetails.data.findIndex((item: { id: any; })=>item.id===payload.id);
                state.allUserGroupDetails.data[updated_group_id]=payload; 
                return state;
        }
            
        
        case userGroupActionTypes.USER_GROUP_DETAILS_GETTING_SUCCEED: {
                state.allUserGroupDetails =  payload;
                return state;
        }

        case userGroupActionTypes.USER_GROUP_SEARCH_SUCCEED: {
                state.allUserGroupDetails = payload;
                return state;
        }

        case userGroupActionTypes.USER_GROUP_DELETE_SUCCEED: {
                console.log(payload);
                for (let i = 0; i < payload.length; i++) {
                    const deleted_usergroup_id = state.allUserGroupDetails.data.findIndex(
                    (item: { id: any }) => item.id === payload[i]
                    );
                    state.allUserGroupDetails.data.splice(deleted_usergroup_id, 1);
                }
                return state;
        }
                    
        default:{
                return state;
        }
    }
});

export default userGroupData;
