import { useEffect, useState } from "react";

export default function ChatbotExample(props){
    
    var c = {"chat1": [
        [{
            "user": true,
            "content": "Erstelle mir ein Ventil mit dem Namen Ventil A",
            "img": ""
        },
        {
            "user": false,
            "content": "Es fehlen noch die Felder: Artikel-Code, Anfangsbestand und Standard-Verkaufspreis. Bitte tragen Sie diese ein.",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/ventil-form2.png"
        }],
        [{
            "user": true,
            "content": "Erstelle die Müller GmbH aus Berlin als Kunde in der Bau Kundengruppe",
            "img": ""
        },
        {
            "user": false,
            "content": "Bestätigen oder bearbeiten Sie das Formular",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/create-customer.png"
        }]
    ],
    "chat2": [
        [{
            "user": true,
            "content": "Zeige mir alle Ventile",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier sind alle Ventile aus dem System",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/ventil-table.png"
        }],
        [{
            "user": true,
            "content": "Zeige mir alle Kunden aus Berlin",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier sind alle Kunden aus Berlin",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/customer-table.png"
        }]
    ],
    "chat3": [
        [{
            "user": true,
            "content": "Bennene alle Ventile um unzwar nach folgendem Muster: Ventil A zu Ventil A1, Ventil B zu Ventil B2 usw.",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier sind die Ergebnisse, bitte bestätigen Sie diese",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/ventil-tabelle-edit.png"
        }],
        [{
            "user": true,
            "content": "Ordne die Müller Gmbh dem Gebiet Bayern zu und die Schulz GmbH dem Gebiet Brandenburg und zeige mir alle Kunden",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier sind alle Kunden",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/customer-table-edit.png"
        }]
    ],
    "chat4": [
        [{
            "user": true,
            "content": "Zeige mir den Umsatz für das letzte Jahr",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier ist eine Statistik mit dem Umsatz aus dem letzten Jahr.",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/graph.png"
        }],
        [{
            "user": true,
            "content": "Zeige mir den Umsatz pro Kunden aus der Region Hessen für das Jahr 2021",
            "img": ""
        },
        {
            "user": false,
            "content": "Hier ist die Statistik für die Region Hessen und das Jahr 2021 nach Kunden",
            "img": ""
        },
        {
            "user": false,
            "content": "",
            "img": "/graph2.png"
        }]
    ]}

    let [num, setNum] = useState(0);
    
    return(
        <div className="chatbot-container">
            <h1>Chatbot Beispiele</h1>
            <div className="chat-container">
                <div className="chat-examples">
                    {
                        props.chats && c[props.chats].map((chat, index) => (
                            <>
                                <button className="secondary-btn" onClick={() => setNum(index)}>Beispiel {index + 1}</button>            
                            </>
                        ))
                    }
                </div>
                <div className="chats">
                    {props.chats && c[props.chats][num].map((chat) => (
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