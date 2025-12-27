import styles from '../styles/MessageBox.module.css';

export default function MessageBox({friends}){
    return (
        <>
            <div className={styles.friend}>
                <img src={friends.image} alt="friend profile" />
                <div>
                    <h5>{friends.friend_name}</h5>
                    <p>{friends.recent_msg}</p>
                </div>
                <p>{friends.time}</p>
            </div>
        </>
    );
}