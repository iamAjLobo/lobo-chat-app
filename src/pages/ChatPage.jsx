import styles from '../styles/ChatPage.module.css';
import searchIcon from '../assets/search-alt-1-svgrepo-com.svg'
import MessageBox from '../components/MessageBox';
import profile from '../assets/message-friend.png';
import MessageContainer from '../components/MessageContainer';
import {useEffect, useState} from 'react';
import axios from 'axios';

export default function ChatPage ({id}){
    const [isMenu, setIsMenu] = useState(false);
    function openLogout(){
       setIsMenu(!isMenu); 
    }

    // Display all users
    const [users,setUsers] = useState([]);
    async function fetchUsers(){
        try{
            const response = await axios.get('http://localhost:5000/user');
            setUsers(response.data);
        }catch(error){
            console.log(error.response);
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[])


    //Current Receiver
    const [receiver,setReceiver] = useState({
        'id':'',
        'name':'Guest Lang',
        'email':'guest@email.com'
    });

    function handleOnSelect(user){
        setReceiver({
            'id':user.id,
            'name':user.name,
            'email':user.email
        }); 
    }


    //Create Conversation id
    const [convo,setConvo] = useState({
        'id':'',
        'user_one_id':'',
        'user_two_id':''
    });

    async function getConvoId(){
        try{
            const response = await axios.post('http://localhost:5000/conversations/convo', {
                'user_one_id': id,
                'user_two_id': receiver.id
            });
            setConvo(response.data);
        }catch(error){
            console.log(error.response);
        }
    }

    //Fetch Messages
    const [messages,setMessages] = useState([]);
    async function fetchMessages(){
        try{
            const response = await axios.post(`http://localhost:5000/messages/convo`,{'conversation_id':convo.id});
            setMessages(response.data);
        }catch(error){
            console.log(error.response);
        }
    }

    //get convo id
    useEffect(() => {
        if (receiver.id) {
            getConvoId();
        }
    }, [receiver.id]);

    const [msg, setMsg] = useState('');    
    const [isSent,setIsSent] = useState(false);
    //fetch message
    useEffect(() => {
        if (convo.id) {
            fetchMessages();
        }
    }, [convo.id,isSent]);

    //sending message
    
    async function sendMessage(){
        try{
            const response = await axios.post('http://localhost:5000/messages',{'conversation_id':convo.id,'sender_id':id,'body':msg});
        }catch(error){
            console.log(error.response);
        }
    }

    function handleOnSubmit(e){
        e.preventDefault();

        if(!msg.trim()) return;    

        sendMessage();
        setMsg('');
        setIsSent(prevState => !prevState);
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
                        <input type='text' id="search" placeholder='Search contacts...'/>
                    </div>
                    {users.map((user)=><MessageBox key={user.id} user={user} onSelect={handleOnSelect} />)}
                </aside>
                <main className={styles.main}>
                    <div className={styles.upper}>
                        <img src={profile} alt="Friend Profiel" /> 
                        <div>
                            <p className={styles.username}>{receiver.name}</p>
                            <p className={styles.email}>{receiver.email}</p>
                        </div>       
                    </div>
                    <div className={styles.middle}>
                        
                            {messages.map((info) => <MessageContainer key={info.id} msgInfo={info} c_id={id}/>)} 
                                  
                    </div>
                    <div className={styles.lower}>
                        <form onSubmit={handleOnSubmit}>
                            <input type="text" id='message' placeholder='Type your message here...' onChange={(e)=>setMsg(e.target.value)} value={msg}/>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}