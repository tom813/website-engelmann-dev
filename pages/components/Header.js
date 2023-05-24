import Link from "next/link"

export default function Header(){
    return(
        <div className="header-container">
            <div className="logo-container">
                <img src="/logo.jpg" style={{width: '300px'}} />
            </div>
            <div className="link-container">
                <a href="#scroll-point-1">Home +</a>
                <Link href="/blog">Blog +</Link>
                <a href="#scroll-point-2">Arbeitweise +</a>
                <a href="#scroll-point-3">Portfolio +</a>
                <a href="#scroll-point-4">Förderung +</a>
                <a href="#scroll-point-5">Kontakt +</a>
            </div>
            <div></div>
        </div>
    )
}