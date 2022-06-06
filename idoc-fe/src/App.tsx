import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UsersList from './pages/usersList';
import GroupList from './pages/Group-list';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import CompanyList from "./pages/companyList";
import UserRoleList from "./pages/userRoleList";
import WorkflowList from "./pages/workflowList";
import TagList from "./pages/TagList";


function App() {

    const userDetails = useSelector((state: any)=> state.userData.userDetails);
    const state = useSelector((state: any)=> state);
    console.log(state);
    return (
        <div className="App">
            <BrowserRouter>
                {userDetails || localStorage.getItem("token") ?
                    <Routes>
                        <Route path="*" element={<Navigate replace to="/users" />} />
                        <Route path="/groups" element={<GroupList/>}/>
                        <Route path="/users" element={<UsersList/>}/>
                        <Route path="/company" element={<CompanyList/>}/>
                        <Route path="/userrole" element={<UserRoleList/>}/>
                        <Route path="/workflow" element={<WorkflowList/>}/>
                        <Route path="/tags" element={<TagList/>}/>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="*" element={<Navigate replace to="/login" />} />
                    </Routes>
                }
            </BrowserRouter>
        </div>
    );
}

export default App;
