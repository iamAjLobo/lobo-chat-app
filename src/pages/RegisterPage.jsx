import styles from '../styles/RegisterPage.module.css';
import msgIcon from '../assets/message-circle-svgrepo-com.svg';
import emailIcon from '../assets/email-1-svgrepo-com.svg';
import passwordIcon from '../assets/lock-password-svgrepo-com.svg';
import profileIcon from '../assets/profile-svgrepo-com.svg';
import Input from '../components/Input';
import { Link} from 'react-router-dom';
import {useState} from 'react';

export default function RegisterPage ({error,onRegister}) {

    const [credentials, setCredentials] = useState({
        'name': '',
        'email': '',
        'password':'',
        'repeat_password': ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(credentials);
    }
    
    return (
        <>
           <div className={`grid container`}>
                <div className={`register ${styles.register}`}>
                    <img className={styles.img} src={msgIcon} alt="message icon" />
                    <h3>Create Account</h3>
                    <p><small>Sign up to get started</small></p>
                    <form onSubmit={handleSubmit}>
                        <Input label='Full Name' id="name" name={credentials.name} icon={profileIcon} type="text" placeholder="Enter your full name" onChange={(e)=>setCredentials({...credentials, name: e.target.value})}/>
                        <Input label='Email' id="email" name={credentials.email} icon={emailIcon} type="email   " placeholder="Enter your email" onChange={(e)=>setCredentials({...credentials,email:e.target.value})}/>
                        <Input label='Password' id="password" name={credentials.password} icon={passwordIcon} type="password" placeholder="Create a password" onChange={(e)=>setCredentials({...credentials, password: e.target.value})}/>
                        <Input label='Password' id="repeat_password" name={credentials.repeat_password} icon={passwordIcon} type="password" placeholder="Confirm your password" onChange={(e)=>setCredentials({...credentials,repeat_password: e.target.value})}/>
                        <button type='submit'>Register</button>
                        <p className={styles.err}>{error.join(" / ")}</p>
                        <p>Already have an account? <span><Link to="/" className={styles.reset}>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </>
    );
}