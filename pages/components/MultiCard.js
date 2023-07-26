 export default function MultiCard(){
    let cards = [
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        },
        {
            headline: "fancy headline",
            description: "fancy description",
            img: "/software-development.png"
        }
    ]

    return(
        <div className="multi-card-container">
            {cards.map((card) => (
                <div className="card" key={card.headline}>
                    <img src="/software-development.png" />
                    <div className="card-content-container">
                        <h3>
                            Card headline
                        </h3>
                        <p>
                            Card description
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
 }