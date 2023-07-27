 export default function MultiCard(){
    let cards = [
        {
            headline: "Buchhaltung",
            description: "Kontrolle über die Finanzen",
            img: "/accounting.png"
        },
        {
            headline: "Einkauf",
            description: "Übersicht über die Wareneingänge",
            img: "/purchase.png"
        },
        {
            headline: "CRM",
            description: "Kundenmanagement",
            img: "/crm.png"
        },
        {
            headline: "Datenimport",
            description: "Mühelos Daten aus anderen Systemen importieren",
            img: "/import.png"
        },
        {
            headline: "Produktionsplanung",
            description: "Steuerung der Produktion",
            img: "/timeline.png"
        },
        {
            headline: "Warenwirtschaft",
            description: "Schnelle Lagerverwaltung",
            img: "/warehouse.png"
        },
        {
            headline: "Qualitätskontrolle",
            description: "Mängel frühzeitig beseitigen",
            img: "/control-system.png"
        },
        {
            headline: "Zeiterfassung",
            description: "Alle Arbeitsstunden erfassen",
            img: "/tracking.png"
        },
        {
            headline: "KI-Chatbot",
            description: "steuern Sie alle Prozesse über unseren intelligenten Chatbot in ScalarOne",
            img: "/chatbot.png"
        }
    ]

    return(
        <div className="multi-card-container">
            {cards.map((card) => (
                <div className="card" key={card.headline}>
                    <img src={card.img} />
                    <div className="card-content-container">
                        <h3>
                            {card.headline}
                        </h3>
                        <p>
                            {card.description}
                        </p>
                        
                    </div>
                </div>
            ))}
        </div>
    )
 }