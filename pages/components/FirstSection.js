export default function FirstSection(props){
    return(
        <div id="scroll-point-1">
            <section className="first-section-container">
            <img src="/sphere-8.png" id="sphere1" />
            <img src="/sphere-slider-1.png" id="sphere2" />
            <img src="/sphere-2.png" id="sphere3" />
            <img src="/sphere-slider-4.png" id="sphere4" />
            <img src="/sphere-slider-4.png" id="sphere5" />
            <img src="/sphere-slider-6.png" id="sphere6" />
            <img src="/sphere-slider-7.png" id="sphere7" />
            <img src="/sphere-slider-1.png" id="sphere8" />

            <div className="first-section-heading">
                <div className="coding-text">
                    {"< scalarsoft >"}
                </div>
                <h1>{props.headline}</h1>
                <p>
                {props.description}
                {/* Wir entwickeln Software für die Logistik- und Baubranche. */}
                </p>
                <a href="https://calendly.com/tom-engelmann/beratungsgesprach" rel="noreferrer" target="_blank">
                    <button className="call-btn">
                        {props.c2a}
                        {/* ScalarOne entdecken */}
                    </button>
                </a>
            </div>
            {/* <img src="/letter-d.png" id="letter-d" /> */}
            <img src={props.letter_url} id="letter-d" />
        </section>
        </div>
    )
}