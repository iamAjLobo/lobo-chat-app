import styles from '../styles/ChatPage.module.css';
import searchIcon from '../assets/search-alt-1-svgrepo-com.svg'
import MessageBox from '../components/MessageBox';
import profile from '../assets/message-friend.png';
import MessageContainer from '../components/MessageContainer';
import {useState} from 'react';

export default function ChatPage (){
    const [isMenu, setIsMenu] = useState(false);
    
    const friends = [
        {   
            id: 1,
            image: profile,
            friend_name: 'Alexander Lobo',
            recent_msg: "Hellow World!",
            time: '10:00am'
        },
        { 
            id:2,
            image: profile,
            friend_name: 'James Lobs',
            recent_msg: "Hellow World!",
            time: '10:00am'
        },
    ];

    const msgInfo = [
        {id:1,isSent: true,message: "Hello, Good Morning"},
        {id:2,isSent: false,message: "Hi iam good"},
        {id:3,isSent: true,message: "You are so hand some"},
        {id:4,isSent: true,message: "and very kind"},
        {id:2,isSent: false,message: "Oh! Thankyou very much and god bless you"},
    ];
    const [messages, setMessges] = useState(msgInfo);
    const [msg, setMsg] = useState('');
    function openLogout(){
       setIsMenu(!isMenu); 
    }

    function handleOnSubmit(e){
        e.preventDefault();

        if(!msg.trim()) return;

        const newMsg = {
            id: messages.length + 1,
            isSent: true,
            message: msg   
        };

        setMessges([...messages,newMsg])
        setMsg('');
    }

    return (
        <>
            <div className={styles.grid}>
                <aside className={styles.sideBar}>
                    <div className={styles.msg}>
                        <h4>Messages</h4>
                        <p onClick={openLogout}>⫶</p>
                        {isMenu && (<div className={styles.logOut}>
                            <h5>Log out</h5>
                        </div>)}
                    </div>
                    <div className={styles.input}>
                        <img src={searchIcon} alt="This is an icon" />
                        <input type='text' placeholder='Search contacts...'/>
                    </div>
                    {friends.map((friend)=><MessageBox key={friend.id} friends={friend}/>)}
                </aside>
                <main className={styles.main}>
                    <div className={styles.upper}>
                        <img src={profile} alt="Friend Profiel" /> 
                        <div>
                            <p className={styles.username}>Alexander Lobo</p>
                            <p className={styles.email}>aj@gmail.com</p>
                        </div>       
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.msgBox}>
                            {messages.map((info) => <MessageContainer key={info.id} msgInfo={info}/>)}      
                        </div>            
                    </div>
                    <div className={styles.lower}>
                        <form onSubmit={handleOnSubmit}>
                            <input type="text" placeholder='Type your message here...' onChange={(e)=>setMsg(e.target.value)} value={msg}/>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}