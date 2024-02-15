import Link from "next/link"
import ScalarOne from "../scalarone"

export default function Header(){
    return(
        <div className="header-container">
            <div className="logo-container">
                <img src="/scalarsoft.png" style={{width: '200px'}} />
            </div>
            <div className="link-container">
                {/* <Link href="/scalarone">ScalarOne +</Link> */}
                <Link href="/">Home +</Link>
                <a href="#scroll-point-2">Arbeitweise +</a>
                <a href="#scroll-point-3">Portfolio +</a>
                <a href="#scroll-point-4">Förderung +</a>
                <a href="#scroll-point-5">Kontakt +</a>
                <Link href="/jobs">Jobs +</Link>
            </div>
            <div></div>
        </div>
    )
}