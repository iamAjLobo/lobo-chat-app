import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import ResetPage from '../pages/ResetPage';
import ChatPage from '../pages/ChatPage';


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  const handleRegister = () => {
    setIsAuthenticated(true);
  }


  return (
    <>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/chat" replace/> : <LoginPage onLogin={handleLogin}/>}/>
        <Route path='/register' element={isAuthenticated ? <Navigate to="/chat" replace/> : <RegisterPage onRegister={handleRegister}/>}/>
        <Route path='/reset-password' element={isAuthenticated ? <Navigate to="/chat" replace/> : <ResetPage/>}/>
        <Route path='/chat' element={isAuthenticated ? <ChatPage/> : <Navigate to="/" replace/>}/>
      </Routes>
    </>
  )
}


