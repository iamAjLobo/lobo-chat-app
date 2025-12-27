import styles from '../styles/MessageContainer.module.css';

export default function MessageContainer ({msgInfo}){
    return (
        <>
            <div className={!msgInfo.isSent ? styles.left : styles.right}>
                <p className={!msgInfo.isSent ? styles.received : styles.sent}>
                    {msgInfo.message}
                </p>
            </div>
        </>
    );
}