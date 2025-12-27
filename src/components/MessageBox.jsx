import styles from '../styles/MessageBox.module.css';

export default function MessageBox({friends}){
    return (
        <>
            <div className={styles.friend}>
                <img src="" alt="" />
                <div>
                    <h5>James laput</h5>
                    <p>Recent MEssage</p>
                </div>
            </div>
        </>
    );
}