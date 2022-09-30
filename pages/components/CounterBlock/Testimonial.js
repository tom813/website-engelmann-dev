


export default function Testimonials(props){
    return(
        <section className="testimonial-container">
            
            <div className="logo-container">
                <img src={props.imgUrl} />
            </div>
            <div className="client-container">
                <p className="coding-text">
                    {"< they_say >"}
                </p>
                <h2 className="testimonial-headline">
                    {props.companyName}
                </h2>
                <p className="testimonial-description">
                    {props.testimonialText}
                </p>
                <strong className="testimonial-name">
                    {props.name}
                </strong>
                <p className="testimonial-position">
                    {props.position}
                </p>
            </div>
        </section>
    )
}