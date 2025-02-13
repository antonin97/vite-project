import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import Header from './components/Header'
import MainContent from "./components/MainContent"


function Page() {
    return (
        <>
            <Header />
            <MainContent />
        </>
    )
}

root.render(
    <Page />
)