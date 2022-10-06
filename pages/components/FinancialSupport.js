export default function FinancialSupport(){
    return(
        <div className="financial-support-container">
            <div className="financial-support-info-container">
                <div className="coding-text">
                    {"< jetzt_digital >"}
                </div>
                <h2>
                    Föderung mit jetzt digital beantragen
                </h2>
                <p>
                    Der Bund fördert Vorhaben zur Digitalisierung relativ mit bis  zu 60% und absolut mit bis zu 50.000€.
                    Unsere Softwarelösungen sind förderfähig und wir helfen Ihnen dabei die Zuschüsse zu Ihrem Projekt zu beantragen.
                    Die Förderung läuft bis Ende 2023, weiter Informationen finden Sie auf der Website des BMWK.
                </p>
                <a target="_blank" href="https://www.bmwk.de/Redaktion/DE/FAQ/Digital-Jetzt/faq-digital-jetzt.html">
                <button>
                   Zum BMWK
                </button>
                </a>
                
            </div>
            <div className="financial-support-image-container">
                <img src="/jetzt-digital.png" />
            </div>
        </div>
    )
}