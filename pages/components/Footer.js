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
                   {/*  <p>
                        <strong>Adress: </strong>
                        27 Division St, New York,  NY 10002, United States of Americ
                    </p> */}
                    <p>
                        <strong>Website: </strong>
                        engelmann-dev.com
                    </p>
                    <p>
                        <strong>Email: </strong>
                        tom@engelmann-dev.com
                    </p>
                    <p>
                        <strong>Phone: </strong>
                        017697457429
                    </p>
                </div>
                <div className="footer-text-container">
                    <h3>Links</h3>
                    <p>Impressum</p>
                    <p>Datenschutz</p>
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