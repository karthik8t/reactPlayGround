import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";
import IngredientItems from "./IngredientItems";
import "./ingredientStyle.css"
import {RecipeInteract} from "@/components/ingredients/RecipeInteract.tsx";


const styles = {
    cardStyle: "w-7/12 h-4/6 my-auto bg-white/80 backdrop-blur-xl flex flex-col items-center max-w-[75rem] rounded-2xl border border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
    cardHeaderStyle: "w-full min-h-[100px] flex items-center",
    cardInputCss: "h-11 bg-gray-100/50 border-0 rounded-lg shadow-inner placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400/20 focus:border-0 transition-all duration-200 min-w-96",
    cardButtonCss: "ml-4 h-11 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-all duration-200 text-white font-medium"
};

interface IngredientsProps {
    onSubmitIngredients?: (value: (((prevState: string) => string) | string)) => void
}

export default function Ingredients({onSubmitIngredients}: IngredientsProps) {
    const [ingredients, setIngredients] = useState<string[]>(["egg", "oil","salt", "onions", "chicken"]);

    const constructPrompt = (ingredientsList : string[]) => {
        return `
      You are a chef. Based on the following ingredients, provide a food recipe with step-by-step instructions.
      Please return the recipe in HTML markup format for easy display. Just provide the HTML code with inline styling and place all in body and only give body element for recipe and nothing more, not even html at the start
      Ingredients: ${ingredientsList.join(", ")}
    `;
    };

    // Method to make the API call
    const getRecipeFromOllama = async (ingredientsList : string[]) => {
        const port = 11434; // From the curl command, the Ollama API is running on port 11434
        const model = "codegeex4"; // Assuming the model is 'llama3.2', as indicated in the curl example

        const prompt = constructPrompt(ingredientsList);
        console.log(prompt)

        try {
            // Make the API call to Ollama
            await fetch(`http://localhost:${port}/api/generate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: model,
                    prompt: prompt,
                    stream: false
                }),
            }).then((response) => response.text())
                .then((data) => {
                    try {
                        const parsedData = JSON.parse(data);
                        const recipe = parsedData.response;
                        const formattedRecipe = recipe.replace("```html", "").replace("```","");
                        console.log(formattedRecipe)
                        onSubmitIngredients?.(formattedRecipe)
                        setIngredients([])
                    } catch (error) {
                        console.error('Error parsing response:', error);
                    }
                })
        } catch (error) {
            console.error("Error making API request:", error);
        }
    };


    const submitIngredient = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const ingredient = formData.get("ingredient");
        if (typeof ingredient === 'string' && ingredient.trim()) {
            setIngredients((prevState) => [...prevState, ingredient]);
            (event.target as HTMLFormElement).reset();
        }
    }

    return (
        <Card className={cn(styles.cardStyle)}>
            <CardHeader className={cn(styles.cardHeaderStyle)}>
                <form className="flex justify-center mt-8" onSubmit={submitIngredient}>
                    <Input type="text" placeholder="Add an ingredient..." enterKeyHint="enter"
                           className={cn(styles.cardInputCss)} name="ingredient"/>
                    <Button type="submit" className={cn(styles.cardButtonCss)}>Add</Button>
                </form>
            </CardHeader>
            <CardContent className={cn("w-3/4 mx-auto mt-12 p-0 min-h-[500px]")}>
                {ingredients.length <= 0 ? (
                    <div className="flex flex-col items-center justify-center h-48">
                        <h1 className="text-2xl text-gray-400 font-light">
                            No ingredients added yet
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm">
                            Add ingredients to get started
                        </p>
                    </div>
                ) : <IngredientItems ingredients={ingredients}/>}
            </CardContent>
            {ingredients.length > 3 && <RecipeInteract onInteract= {() => getRecipeFromOllama(ingredients)} buttonContent={"Generate"} />}
        </Card>
    );
};
