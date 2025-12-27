import styles from '../styles/MessageContainer.module.css';

export default function MessageContainer ({msgInfo}){
    return (
        <>
            <div className={styles.box}>
                <p>
                    {msgInfo.message}
                </p>
            </div>
        </>
    );
}