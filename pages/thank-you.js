import Link from "next/link"
import Header from "./components/Header"

export default function ThankYou(){
    return(
        <div className="">
            <section className="thank-you-container">
            <div id="scroll-point-5" />
            <h2>Wir freuen uns auf den Termin <span>{"</>"} </span></h2>
            <p>
            Sie haben eine Email erhalten, bitte bestätigen Sie den Termin. Dieser wird Ihnen in Ihrem Kalender angezeigt.
            </p>
            <div className="btn-group">
            <Link href="/scalarone" rel="noreferrer" target="_blank">
                <button className="call-btn">
                    Zurück zu ScalarOne
                </button>
            </Link>
            
            </div>
        </section>
        </div>
    )
}