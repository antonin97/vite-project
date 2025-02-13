import logo from '../assets/react-logo.png'



export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} />
            <nav className="nav">
            <ul className="my-ul">
                <li className="nav-item">Pricing</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
        </header>
    )
}