import { useState } from 'react'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage'
import ResetPage from '../pages/ResetPage';
import ChatPage from '../pages/ChatPage';
import axios from 'axios';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser] = useState({});
  const [errors,setErrors] = useState([]);
  const navigate = useNavigate();



  const handleLogin = async (credentials) => {
    try{
      const response = await axios.post('http://localhost:5000/user/login',credentials);
      setUser(response.data);
      setIsAuthenticated(true);
      navigate('/chat');
    }catch(error){
       if(error.response){
          setErrors(error.response?.data?.error || ['Something went wrong']);
       }
    }
  }

  const handleRegister = async (credentials) => {
    try{
      const response = await axios.post('http://localhost:5000/user/register',credentials);
      console.log(response.data);
      navigate('/');
    }catch(error){
      if(error.response){
        setErrors(error.response?.data?.error || ['Something went wrong']);
      }
    }
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage error={errors} onLogin={handleLogin}/>}/>
        <Route path='/register' element={<RegisterPage error={errors} onRegister={handleRegister}/>}/>
        <Route path='/reset-password' element={<ResetPage/>}/>
        <Route path='/chat' element={isAuthenticated ? <ChatPage {...user}/> : <Navigate to="/" replace/>}/>
      </Routes>
    </>
  )
}


