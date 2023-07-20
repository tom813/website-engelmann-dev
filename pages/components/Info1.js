export default function Info1(props){
    return(
        <div className="info1-container">
            <div className="info-card-container">
            <div className="info-card">
                <h2>
                    {/* CONSULTING */}
                    {props.headline1}
                </h2>
                <br />
                <p>
                    {props.description1}
                </p>
            </div>
            <div className="info-card">
                <h2>
                    
                    {props.headline2}
                </h2>
                <br />
                <p>
                {props.description2}
                </p>
            </div>
            <div className="info-description-card">
                <div className="coding-text">
                    {"< scalarsoft >"}
                </div>
                <h1>
                    {/* What We <br />
                    Are Doing Best */}
                    {props.headline3}
                </h1>
                
            </div>
            </div>
        </div>
    )
}