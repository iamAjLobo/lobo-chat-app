
import styles from '../styles/ResetPage.module.css';
import msgIcon from '../assets/message-circle-svgrepo-com.svg';
import emailIcon from '../assets/email-1-svgrepo-com.svg';
import {Link} from 'react-router-dom';
import Input from '../components/Input';

export default function ResetPage () {
    return (
        <>
            <div className={`grid container`}>
                <div className={`forgot ${styles.forgot}`}>
                    <img className={styles.img} src={msgIcon} alt="message icon" />
                    <h3>Forgot Password?</h3>
                    <p><small>Enter your email to receive a password reset link</small></p>
                    <form>
                        <Input label='Email' icon={emailIcon} type="text" placeholder="Enter your email"/>  
                        <button type='submit'>Send Reset Link</button>
                        <p className={styles.goBack}><Link to="/" className={styles.reset}>Back to login</Link></p>
                    </form>
                </div>  
            </div>
        </>
    );
}