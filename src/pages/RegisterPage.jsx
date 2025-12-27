import styles from '../styles/RegisterPage.module.css';
import msgIcon from '../assets/message-circle-svgrepo-com.svg';
import emailIcon from '../assets/email-1-svgrepo-com.svg';
import passwordIcon from '../assets/lock-password-svgrepo-com.svg';
import profileIcon from '../assets/profile-svgrepo-com.svg';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage ({onRegister}) {
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister();
    }
    
    return (
        <>
           <div className={`grid container`}>
                <div className={`register ${styles.register}`}>
                    <img className={styles.img} src={msgIcon} alt="message icon" />
                    <h3>Create Account</h3>
                    <p><small>Sign up to get started</small></p>
                    <form onSubmit={handleSubmit}>
                        <Input label='Full Name' icon={profileIcon} type="text" placeholder="Enter your full name"/>
                        <Input label='Email' icon={emailIcon} type="email   " placeholder="Enter your email"/>
                        <Input label='Password' icon={passwordIcon} type="password" placeholder="Create a password"/>
                        <Input label='Password' icon={passwordIcon} type="password" placeholder="Confirm your password"/>
                        <button type='submit'>Register</button>
                        <p>Already have an account? <span><Link to="/" className={styles.reset}>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </>
    );
}