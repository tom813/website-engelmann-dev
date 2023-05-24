export default function Footer(){
    return(
        <section className="footer-container">
            <div className="footer-texts-container">
                <div className="footer-text-container">
                    <h3>Engelmann-dev</h3>
                    <p>Wir entwickeln individuelle Software für die Logistik- und Baubranche.</p>
                </div>
                <div className="footer-text-container">
                    <h3>Kontakt aufnehmen</h3>
                  
                    <p>
                        <strong>Website: </strong>
                        scalarsoft.de
                    </p>
                    
                </div>
                <div className="footer-text-container">
                    <h3>Links</h3>
                    <a href="https://engelmann-dev.com/impressum" rel="noreferrer">
                        <p>Impressum</p>
                    </a>
                    <a href="https://engelmann-dev.com/datenschutz" rel="noreferrer">
                        <p>Datenschutz</p>
                    </a>
                    <a href="https://calendly.com/tom-engelmann/beratungsgesprach" rel="noreferrer" target="_blank">
                        <p>Kontakt</p>
                    </a>
                </div>
                <div className="footer-text-container">
                    <h3>Kontakt</h3>
                    <a href="https://calendly.com/tom-engelmann/beratungsgesprach" rel="noreferrer" target="_blank">
                        <button>
                            Termin vereinbaren
                        </button>
                    </a>
                    
                </div>
            </div>
            
        </section>
    )
}