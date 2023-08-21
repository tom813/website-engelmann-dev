export default function CaseStudy(props){
    return(
        <div className="case-study-container">
            <h2>
                {props.title}
            </h2>
            {props.imgUrl && (<img 
            src={props.imgUrl}
            />)}
                <p>
                    {props.text}
                </p>
            <a href={props.link} rel="noreferrer" target="_blank">
                <button className="secondary-btn">
                    {props.buttonText}
                </button>
            </a>
            
        </div>
    )
}