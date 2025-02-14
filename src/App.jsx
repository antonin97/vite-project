import Navbar from './components/Header'
import Grafik from './components/Grafik'
import data from './assets/destinations.json'; // Import the JSON file

export default function App() {
    return (
        <>
            <Navbar />
            {data.map((site) => <Grafik site={site} />)}
        </>
    )
}
