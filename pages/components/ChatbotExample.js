import { useEffect, useState } from "react";

export default function ChatbotExample(props){
    
    let [chats, setChat] = useState([]);
    useEffect(() => {
        setChat(props.chats[0])
    })
    return(
        <div className="chatbot-container">
            <h1>Chatbot Beispiele</h1>
            <div className="chat-container">
                <div className="chat-examples">
                    {
                        props.chats.map((chat, index) => (
                            <>
                                <button className="secondary-btn" onClick={() => setChat(props.chats[index])}>Beispiel {index + 1}</button>            
                            </>
                        ))
                    }
                </div>
                <div className="chats">
                    {chats.map((chat) => (
                        <div key={chat.user} className="chat-content-container"
                        style={{
                            alignSelf: chat.user ? "flex-start" : "flex-end",
                            flexDirection: chat.user ? "row" : "row-reverse"
                    }}
                        >
                            <img
                            src={chat.user ? "/user.png" : "/robot.png"}
                            />
                            <div 
                            className="chat-content"
                            style={{
                                    borderTopLeftRadius: chat.user ? "0px" : "10px",
                                    borderTopRightRadius: chat.user ? "10px": "0px",
                                    padding: chat.img ? "0" : null,                                    
                                    borderRadius: chat.img ? 0: null
                                    
                        }}
                            >
                                {chat.img ? (<img src={chat.img} />): (<p>{chat.content}</p>)}                               
                            </div>
                        </div>
))}
                </div>
            </div>
        </div>
    )
}