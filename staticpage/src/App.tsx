import {useState} from 'react'
import './App.css'
import FactCard from './factCard/components/FactCard'
import TravelJournal from "@/travelJournal/TravelJournal.tsx";
import {ThemeProvider} from "@/components/theme/theme-provider.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <TravelJournal/>
        </ThemeProvider>
        // <FactCard/>
    )
}

export default App
