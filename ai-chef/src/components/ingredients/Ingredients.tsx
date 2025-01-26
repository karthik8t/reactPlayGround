import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";
import IngredientItems from "./IngredientItems";


type Props = {};
export default function Ingredients({}: Props) {
    const [ingredients, setIngredients] = useState<string[]>([]);

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
        <Card className={cn(
            "w-7/12 h-4/6 my-auto",
            "bg-white/80 backdrop-blur-xl",
            "flex flex-col items-center max-w-[75rem]",
            "rounded-2xl border border-gray-200/50",
            "shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
        )}>
            <CardHeader className={cn(
                "w-full",
                "min-h-[100px]",
                "flex items-center"
            )}>
                <form className="flex justify-center mt-8" onSubmit={submitIngredient}>
                    <Input 
                        type="text"
                        placeholder="Add an ingredient..."
                        enterKeyHint="enter"
                        className={cn(
                            " h-11",
                            "bg-gray-100/50 border-0",
                            "rounded-lg shadow-inner",
                            "placeholder:text-gray-400",
                            "focus:ring-2 focus:ring-blue-400/20 focus:border-0",
                            "transition-all duration-200",
                            "min-w-96"
                        )}
                        name="ingredient"
                    />
                    <Button 
                        type="submit" 
                        className={cn(
                            "ml-4 h-11 px-6",
                            "bg-blue-500 hover:bg-blue-600",
                            "rounded-lg shadow-sm",
                            "transition-all duration-200",
                            "text-white font-medium"
                        )}
                    >
                        Add
                    </Button>
                </form>
            </CardHeader>
            <CardContent className={cn(
                "w-3/4 mx-auto mt-12 p-0",
                "min-h-[500px]"
            )}>
                {ingredients.length > 0 ? (
                    <IngredientItems ingredients={ingredients} />
                ) : (
                    <div className="flex flex-col items-center justify-center h-48">
                        <h1 className="text-2xl text-gray-400 font-light">
                            No ingredients added yet
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm">
                            Add ingredients to get started
                        </p>
                    </div>
                )}
            </CardContent>
            <CardFooter className={cn(
                "mt-auto mb-12 py-6 px-8",
                "min-h-[100px]",
                "bg-gradient-to-r from-blue-500/5 to-purple-500/5",
                "w-11/12 rounded-xl",
                "flex items-center justify-between",
                "shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
                "border border-gray-100",
                "max-w-[60rem]"
            )}>
                <div className="space-y-1">
                    <h1 className="text-2xl font-medium text-gray-800">
                        Ready for Recipe?
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Generate a recipe from your list of ingredients
                    </p>
                </div>
                <Button 
                    type="button" 
                    className={cn(
                        "bg-gradient-to-r from-blue-500 to-blue-600",
                        "hover:from-blue-600 hover:to-blue-700",
                        "text-white font-medium",
                        "px-8 py-2.5 rounded-lg",
                        "shadow-sm",
                        "transition-all duration-200"
                    )}
                >
                    Generate
                </Button>
            </CardFooter>
        </Card>
    );
};
