import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import UsersList from './pages/usersList';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/forgot-password" element={<ForgotPassword/>} />
                    <Route path="*" element={<Navigate replace to="/login" />} />
                    <Route path="/users" element={<UsersList/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
