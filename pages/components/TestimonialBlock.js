import CaseStudy from "./CaseStudy";

export default function TestimonialBlock(props){
    return(
        <div className="testimonial-block-container">
            <h2>
                Unsere Partner
            </h2>
            <div className="testimonial-block-icon-container">
            <a href="http://www.merita-gmbh.de/">
                    <img src="logo-merita.webp" />
                </a>
                <a href="https://zacgmbh.de">
                    <img src="logo-zac.png" />
                </a>
                
                {/* <a href="https://bsu-holding.de/">
                    <img src="logo-bsu.png" />
                </a> */}
            </div>
            <CaseStudy 
                title="Case-Study: ZAC GmbH"
                text="Hier können Sie einen beispielhaften Einblick in das Projekt mit der Zac Service und Dienstleistungs GmbH erhalten. Es wird dargestellt wie das Projekt entstand, welche Herausforderungen wir hatten und wie wir diese lösten. Außerdem erhalten Sie einen Einblick in unsere Arbeitsweise und sehen ein paar Design-Beispiele."
                buttonText="Case-Study herunterladen"
                link="/case-study-zac.pdf"
            />
        </div>
    )
}