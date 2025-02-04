import './App.css'
import Header from "@/components/header/Header.tsx";
import Ingredients from "@/components/ingredients/Ingredients.tsx";
import {useState} from "react";
import {Card, CardContent, CardFooter} from "@/components/ui/card.tsx";
import {cn} from "@/lib/utils.ts";
import {RecipeInteract} from "@/components/ingredients/RecipeInteract.tsx";

const styles = {
    cardStyle: "w-7/12 h-4/6 my-auto bg-white/80 backdrop-blur-xl flex flex-col items-center max-w-[75rem] rounded-2xl border border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
    cardHeaderStyle: "w-full min-h-[100px] flex items-center",
    cardInputCss: "h-11 bg-gray-100/50 border-0 rounded-lg shadow-inner placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400/20 focus:border-0 transition-all duration-200 min-w-96",
    cardButtonCss: "ml-4 h-11 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all duration-200 text-white font-medium"
};


function App() {
    const [recipe, setRecipe] = useState("")
    return (
        <div className="min-h-screen bg-[#f0f0f0] dark:bg-[#1e1e1e] w-full h-full flex flex-col items-center">
            <Header/>
            <main className="max-w-[1200px] w-full flex-grow flex justify-center items-center">
                {recipe.length <= 0 ? <Ingredients onSubmitIngredients={setRecipe}/>
                    :
                    (
                        <Card className={cn(styles.cardStyle)}>
                            <CardContent className={cn("w-3/4 mx-auto mt-12 p-0 min-h-[500px]")}>
                                <div dangerouslySetInnerHTML={{ __html: recipe}} ></div>
                            </CardContent>
                            <RecipeInteract onInteract= {() => setRecipe("")} buttonContent={"New Recipe"} />
                        </Card>
                    )
                }
            </main>
        </div>
    )
}

export default App
