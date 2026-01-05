import styles from '../styles/MessageContainer.module.css';

export default function MessageContainer ({msgInfo,c_id}){
    return (
        <>
            <div className={msgInfo.sender_id != c_id ? styles.left : styles.right}>
                <p className={msgInfo.sender_id != c_id ? styles.received : styles.sent}>
                    {msgInfo.body}
                </p>
            </div>
        </>
    );
}