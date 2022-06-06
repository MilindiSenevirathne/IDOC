import { combineReducers } from 'redux';

import userData from './userReducer';
import userGroupData from './userGroupReducer';
import authData from "./authReducer";
import  companyData  from './companyReducer';
import roleData from './roleReducer';
import groupData from './groupReducer';
import userRoleData from "./userRoleReducer"
import workflowData from './workflowReducer';
import packageData from "./packageReducer";
import tagData from './tagReducer';

const rootReducer = combineReducers({
    authData,
    userData,
    userGroupData,
    companyData,
    roleData,
    groupData, 
    userRoleData,
    workflowData,
    packageData,
    tagData
});

export default rootReducer;
