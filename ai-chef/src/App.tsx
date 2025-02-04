import './App.css'
import Header from "@/components/header/Header.tsx";
import Ingredients from "@/components/ingredients/Ingredients.tsx";

function App() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-[#1e1e1e] w-full h-full flex flex-col items-center">
        <Header />
        <main className="max-w-[1200px] w-full flex-grow flex justify-center items-center">
            <Ingredients />
        </main>
    </div>
  )
}

export default App
