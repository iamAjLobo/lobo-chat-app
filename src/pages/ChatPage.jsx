import styles from '../styles/ChatPage.module.css';
import searchIcon from '../assets/search-alt-1-svgrepo-com.svg'
import MessageBox from '../components/MessageBox';
import profile from '../assets/message-friend.png';

export default function ChatPage (){

    const friends = [
        {   
            id: 1,
            image: profile,
            friend_name: 'alexander',
            recent_msg: "Hellow World!",
            time: '10:00am'
        },
        { 
            id:2,
            image: profile,
            friend_name: 'james lobs',
            recent_msg: "Hellow World!",
            time: '10:00am'
        },
    ];

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
                    {friends.map((e)=><MessageBox key={e.id} friends={friends}/>)}
                </aside>
                <main className={styles.main}>
                    b
                </main>
            </div>
        </>
    );
}