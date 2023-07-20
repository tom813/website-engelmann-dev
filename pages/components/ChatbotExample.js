import { useState } from "react"

export default function ChatbotExample(){
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
            img: "/Artikel.jpg"
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
            content: `sdfsd <br />
            sdfsdf`,
            img: ""
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
        }
    ]
    let [chats, setChat] = useState(chat1)
    return(
        <div className="chatbot-container">
            <h1>Chatbot Beispiele</h1>
            <div className="chat-container">
                <div className="chat-examples">
                    {/* Wie viele Artikel, die mit der Artikelnummer 123 beginnen sind im System angelegt? */}
                    
                    <button className="secondary-btn" onClick={() => setChat(chat1)}>Beispiel 1</button>
                    {/* Erstelle ein neues Projekt für die Mustermann GmbH */}
                    <button className="secondary-btn" onClick={() => setChat(chat2)}>Beispiel 2</button>
                    {/* Wie viel Umsatz wurde in den letzten 3 Monaten im Durchschnitt gemacht? */}
                    <button className="secondary-btn" onClick={() => setChat(chat3)}>Beispiel 3</button>
                    {/* Erhöhe den Verkaufspreis für alle Artikel vom Zulieferer Mustermann um 1€ */}
                    <button className="secondary-btn" onClick={() => setChat(chat4)}>Beispiel 4</button>
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
                                    borderRadius: chat.img ? 0: null,
                                    height: chat.img ? "300px" : null 
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