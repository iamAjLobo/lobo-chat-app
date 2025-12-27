import styles from '../styles/ChatPage.module.css';
import searchIcon from '../assets/search-alt-1-svgrepo-com.svg'

export default function ChatPage (){

    const friends = {
        image: '',
        friend_name: 'alexander',
        recent_msg: "Hellow World!",
        time: '10:00am'
    }

    return (
        <>
            <div className={styles.grid}>
                <aside className={styles.sideBar}>
                    <div className={styles.msg}>
                        <h4>Messages</h4>
                        <p>⫶</p>
                    </div>
                    <div className={styles.input}>
                        <img src={searchIcon} alt="This is an icon" />
                        <input type='text' placeholder='Search contacts...'/>
                    </div>
                </aside>
                <main className={styles.main}>
                    b
                </main>
            </div>
        </>
    );
}