import {companyActionTypes} from '../actionTypes';
import produce from "immer";

const initialState = {
    companyDetails : null,
    allCompanyDetails: {data:[], totalSize:0}
};



const CompanyData = produce((state = initialState, action: {type: any; payload: any;}) => {
    const {type, payload} = action;

    switch (type){
        case companyActionTypes.ADD_COMPANY_SUCCEED: {
                var data = payload;
                data.id = state.allCompanyDetails.length+1
                state.allCompanyDetails.data.push(data);
                return state;
        }
        
        case companyActionTypes.UPDATE_COMPANY_SUCCEED: {
                const updated_company_id = state.allCompanyDetails.data.findIndex((item: { companyId: any; })=>item.companyId===payload.companyId);
                console.log(payload);
                state.allCompanyDetails.data[updated_company_id]=payload; 
                return state;
        }
            
        
        case companyActionTypes.COMPANY_DETAILS_GETTING_SUCCEED: {
                state.allCompanyDetails =  payload;
                return state;
        }

        case companyActionTypes.COMPANY_SEARCH_SUCCEED: {
                state.allCompanyDetails = payload;
                return state;
        }


        case companyActionTypes.COMPANY_DELETE_SUCCEED: {
                for (let i = 0; i < payload.length; i++) {
                    const deleted_company_id = state.allCompanyDetails.data.findIndex(
                    (item: { id: any }) => item.id === payload[i]
                    );
                    state.allCompanyDetails.data.splice(deleted_company_id, 1);
                }
                return state;
        }

                    
        default:{
                return state;
        }
    }
});

export default CompanyData;
