import styles from '../styles/MessageBox.module.css';
import profile from '../assets/message-friend.png';

export default function MessageBox({user,onSelect}){
    return (
        <>
            <div onClick={()=>onSelect(user)} className={styles.friend}>
                <img src={profile} alt="friend profile" />
                <div className={styles.info}>
                    <h5>{user.name}</h5>
                    <p>{user.email}</p>
                </div>
                <p className={styles.time}>00:00</p>
            </div>
        </>
    );
}