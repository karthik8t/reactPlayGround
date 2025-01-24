import {useState} from 'react'
import './App.css'
import FactCard from './factCard/components/FactCard'

function App() {
    const [count, setCount] = useState(0)

    return (
        <FactCard/>
    )
}

export default App
