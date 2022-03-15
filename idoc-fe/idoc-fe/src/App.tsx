import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import UsersList from './pages/usersList';

function App() {

    const userDetails = useSelector((state: any)=> state.userData.userDetails);
    const state = useSelector((state: any)=> state);
    console.log(state);
    return (
        <div className="App">
            <BrowserRouter>
                {userDetails ?
                    <Routes>
                        <Route path="/dashboard" element={<div> Dashboard </div>}/>
                        <Route path="*" element={<Navigate replace to="/dashboard" />} />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="*" element={<Navigate replace to="/login" />} />
                        <Route path="/users" element={<UsersList/>}/>
                    </Routes>
                }
            </BrowserRouter>
        </div>
    );
}

export default App;
