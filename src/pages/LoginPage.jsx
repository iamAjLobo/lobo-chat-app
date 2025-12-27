import styles from '../styles/LoginPage.module.css';
import msgIcon from '../assets/message-circle-svgrepo-com.svg';
import emailIcon from '../assets/email-1-svgrepo-com.svg';
import passwordIcon from '../assets/lock-password-svgrepo-com.svg';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage ({onLogin}) {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
        navigate('/chat');
    }    

    return (
        <>
            <div className={`grid container`}>
                <div className={`login ${styles.login}`}>
                    <img className={styles.img} src={msgIcon} alt="message icon" />
                    <h3>Welcome Back</h3>
                    <p><small>Sign in to continue to your account</small></p>
                    <form onSubmit={handleSubmit}>
                        
                        <Input label='Email or Username' icon={emailIcon} type="text" placeholder="Enter your email"/>
                        <Input label='Password' icon={passwordIcon} type="password" placeholder="Enter your password"/>
                        <h5><Link to="/reset-password" className={styles.reset}>Forgot password?</Link></h5>
                        <button type='submit'>Login</button>
                        <p>Don't have an account? <span><Link to="/register" className={styles.reset}>Register</Link></span></p>
                    </form>
                </div>  
            </div>
        </>
    );
}