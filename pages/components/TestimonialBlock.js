export default function TestimonialBlock(){
    return(
        <div className="testimonial-block-container">
            <h2>Unsere Kunden</h2>
            <div className="testimonial-block-icon-container">
            <a href="http://www.merita-gmbh.de/">
                    <img src="logo-merita.webp" />
                </a>
                <a href="https://zacgmbh.de">
                    <img src="logo-zac.png" />
                </a>
                
                <a href="https://bsu-holding.de/">
                    <img src="logo-bsu.png" />
                </a>
            </div>
            <div className="case-study-container">
                <h2>Case-Study: ZAC GmbH</h2>
                    <p>
                        Hier können Sie einen beispielhaften Einblick in das Projekt mit der Zac Service und Dienstleistungs GmbH erhalten.
                        Es wird dargestellt wie das Projekt entstand, welche Herausforderungen wir hatten und wie wir diese lösen.
                        Außerdem erhalten Sie einen Einblick in unsere Arbeitsweise und sehen ein paar Design-Beispiele.
                    </p>
                <a href="/case-study-zac.pdf" target="_blank">
                    <button className="secondary-btn">Case-Study ansehen</button>
                </a>
                
            </div>
        </div>
    )
}