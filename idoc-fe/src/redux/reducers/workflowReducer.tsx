import {workflowActionTypes} from '../actionTypes';
import produce from "immer";

const initialState = {
    workflowDetails : null,
    allWorkflowDetails: {data:[], totalSize:0}
};



const workflowData = produce((state = initialState, action: {type: any; payload: any;}) => {
    const {type, payload} = action;

    switch (type){
        case workflowActionTypes.ADD_WORKFLOW_SUCCEED: {
                state.allWorkflowDetails.data.push(payload);
                return state;
        }
        
        case workflowActionTypes.UPDATE_WORKFLOW_SUCCEED: {
                const updated_workflow_id = state.allWorkflowDetails.data.findIndex((item: { id: any; })=>item.id===payload.id);
                console.log(payload);
                state.allWorkflowDetails.data[updated_workflow_id]=payload; 
                return state;
        }
            
        
        case workflowActionTypes.WORKFLOW_DETAILS_GETTING_SUCCEED: {
                state.allWorkflowDetails =  payload;
                return state;
        }

        case workflowActionTypes.WORKFLOW_SEARCH_SUCCEED: {
                state.allWorkflowDetails = payload;
                return state;
        }


        case workflowActionTypes.WORKFLOW_DELETE_SUCCEED: {
                for (let i = 0; i < payload.length; i++) {
                    const deleted_workflow_id = state.allWorkflowDetails.data.findIndex(
                    (item: { id: any }) => item.id === payload[i]
                    );
                    state.allWorkflowDetails.data.splice(deleted_workflow_id, 1);
                }
                return state;
        }

                    
        default:{
                return state;
        }
    }
});

export default workflowData;
