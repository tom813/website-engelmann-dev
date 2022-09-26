
export default function Testimonials(props){
    return(
        <section className="testimonial-container">
            <img src="/sphere-8.png" id="ball1" />
            <img src="sphere-10.png" id="ball2" />
            <div className="logo-container">
                <img src="/logo.png" />
            </div>
            <div className="client-container">
                <p className="coding-text">
                    {"< they_say >"}
                </p>
                <h2 className="testimonial-headline">
                    Kunden GmbH {props.test}
                </h2>
                <p className="testimonial-description">
                We create e-commerce solutions and slick, eye-pleasing and user-friendly online stores, that let you focus on your business. The most popular form of e-commerce is the online store. It is nothing but a website with a catalog of products and the
                </p>
                <strong className="testimonial-name">
                    Vorname Nachname
                </strong>
                <p className="testimonial-position">
                    Geschäftsführer
                </p>
            </div>
        </section>
    )
}