import '../css/header.css'


export default function Header() {
    return (
        <nav>
            <div className="logo"></div>
            <ul className="nav-links">
                <li id="active">home</li>
                <li>work</li>
                <li>about</li>
            </ul>
        </nav>
    )
}