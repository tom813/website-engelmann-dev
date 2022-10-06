export default function ContactUs(){
    return(
        <section className="contact-us-container">
            <h2>Kontaktieren Sie uns <span>{"</>"} </span></h2>
            <p>
            Bei Fragen zu konkreten Vorhaben oder zu uns stehen wir selbstverständlich zur Verfügung. Suchen Sie sich einfach einen freien Zeitraum aus.
            </p>
            <div className="btn-group">
            <a href="https://calendly.com/tom-engelmann/beratungsgesprach" rel="noreferrer" target="_blank">
                <button className="call-btn">
                    Termin vereinbaren
                </button>
            </a>
            
            </div>
        </section>
    )
}