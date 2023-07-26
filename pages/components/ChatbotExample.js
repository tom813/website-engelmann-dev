import { useState } from "react"

export default function ChatbotExample(props){
    let chat1 = [
        {
            user: true,
            content: "Wie viele Artikel, die mit der Artikelnummer 123 beginnen sind im System angelegt?",
            img: ""
        },
        {
            user: false,
            content: "Aktuell gibt es 6 Artikel, die mit '123' beginnen. Hier ist eine Tabelle mit den Artikeln.",
            img: ""
        },
        {
            user: false,
            content: "",
            img: "/ventil-form2.png"
        }
    ]
    let chat2 = [
        {
            user: true,
            content: "Erstelle ein neues Projekt für die Mustermann GmbH",
            img: ""
        },
        {
            user: false,
            content: "Um das Projekt zu erstellen, sind noch folgende Daten notwendig",
            img: ""
        },
        {
            user: false,
            content: "",
            img: "/ventil-table.png"
        }
    ]
    let chat3 = [
        {
            user: true,
            content: "Wie viel Umsatz wurde in den letzten 3 Monaten im Durchschnitt gemacht?",
            img: ""
        },
        {
            user: false,
            content: "In den letzten 3 Monaten wurden 546.829,21€ Umsatz gemacht. Hier ist eine Übersicht.",
            img: ""
        },
        {
            user: false,
            content: "",
            img: "/ventil-tabelle-edit.png"
        }
    ]
    let chat4 = [
        {
            user: true,
            content: "Erhöhe den Verkaufspreis für alle Artikel vom Zulieferer Mustermann um 1€",
            img: ""
        },
        {
            user: false,
            content: "Hier ist eine Vorschau mit den angepassten Artikeln. Bitte bestätigen Sie die Tabelle.",
            img: ""
        },
        {
            user: false,
            content: "",
            img: "/graph.png"
        }
    ]

    let [chats, setChat] = useState(props.chats[0]);
    
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