

export default function OurValues(){
    return(
        <section className="value-container">
            <div className="value-headline-container">
            <div className="coding-text">
                {"< our_values >"}
            </div>
            <h2>
                Was uns
                <br />
                besonders WICHTIG ist
            </h2>
            </div>
            <div className="value-content-container">
                <div className="image-value-container">
                    {/* <img src="/images_layers_4-01.png" />
                    <img src="/images_layers_4-02.png" />
                    <img src="/images_layers_4-03.png" /> */}
                    <img src="/digital-values.png" />
                </div>
                <div className="value-card-container">
                    <div className="value-card">
                        <div className="value-icon-container">
                            <img src="/paper-plane.png" />
                        </div>
                        <div className="value-text-container">
                            <h3>
                                Kundenzufriedenheit
                            </h3>
                            <p>
                                Mit Abstand an oberster Stelle jedes Projekts steht die Zufriedenheit des Kunden.
                            </p>
                        </div>
                    </div>

                    <div className="value-card">
                        <div className="value-icon-container">
                            <img src="/paper-plane.png" />
                        </div>
                        <div className="value-text-container">
                            <h3>
                                Verständnis
                            </h3>
                            <p>
                                Es ist uns besonders wichtig genau zu verstehen was unsere Kunden verlagen und was Ihre Ziele sind.
                            </p>
                        </div>
                    </div>

                    <div className="value-card">
                        <div className="value-icon-container">
                            <img src="/paper-plane.png" />
                        </div>
                        <div className="value-text-container">
                            <h3>
                                Qualität
                            </h3>
                            <p>
                                Wir entwickeln unsere Software so, dass sie auch von jedem anderem Fachmann erweitert werden kann.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}