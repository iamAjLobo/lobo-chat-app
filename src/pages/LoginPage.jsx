import styles from '../styles/LoginPage.module.css';
import msgIcon from '../assets/message-circle-svgrepo-com.svg';
import emailIcon from '../assets/email-1-svgrepo-com.svg';
import passwordIcon from '../assets/lock-password-svgrepo-com.svg';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function LoginPage ({error,onLogin}) {
    const [credentials, setCredentials] = useState({
        'email':'',
        'password':''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(credentials);
    }    

    return (
        <>
            <div className={`grid container`}>
                <div className={`login ${styles.login}`}>
                    <img className={styles.img} src={msgIcon} alt="message icon" />
                    <h3>Welcome Back</h3>
                    <p><small>Sign in to continue to your account</small></p>
                    <form onSubmit={handleSubmit}>
                        
                        <Input label='Email or Username' id="email" name={credentials.name} icon={emailIcon} type="text" placeholder="Enter your email" onChange={(e)=>setCredentials({...credentials,email: e.target.value})}/>
                        <Input label='Password' id="password" name={credentials.password} icon={passwordIcon} type="password" placeholder="Enter your password" onChange={(e)=>setCredentials({...credentials,password:e.target.value})}/>
                        <h5><Link to="/reset-password" className={styles.reset}>Forgot password?</Link></h5>
                        <button type='submit'>Login</button>
                        <p className={styles.err}>{error.join(" / ")}</p>
                        <p>Don't have an account? <span><Link to="/register" className={styles.reset}>Register</Link></span></p>
                    </form>
                </div>  
            </div>
        </>
    );
}