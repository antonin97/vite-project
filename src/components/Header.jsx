import globe from '../assets/globe.png'


export default function Header() {
    return (

        <header className="header">
            <img className="globe-img" src={globe} alt="Globe" />
            <span className="header-text">my travel journal.</span>
        </header>
    )
}