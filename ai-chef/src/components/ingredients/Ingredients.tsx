import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {useState} from "react";


type Props = {};
export default function Ingredients({}: Props) {

    const [ingredients, setIngredients] = useState(["Onions", "Tomatoes", "Eggs"])


    const submitIngredient = (event: Event) => {
        event.preventDefault();
        const formData : FormData = new FormData(event.currentTarget);
        setIngredients((prevState) => [...prevState , formData.get("ingredient")])
    }


    return (
        <Card className={cn("w-7/12 h-4/6 my-auto bg-[#FBFBFB] flex flex-col items-center max-w-[75rem]")}>
            <CardHeader className={"w-full"}>
                <form className={"flex justify-center mt-12"} onSubmit={submitIngredient}>
                    <Input type={"text"} placeholder={"ingredient"} enterKeyHint={"enter"} className={"w-1/2"} name={"ingredient"}/>
                    <Button type={"submit"} className={"ml-4"}>Add</Button>
                </form>
            </CardHeader>
            <CardContent className={"w-3/4 mx-auto mt-16 p-0"}>
                <h1 className={"text-4xl"}>Ingredients in hand: </h1>
                <ul className={"text-2xl overflow-auto mt-4 ml-12 max-h-96 list-disc list-inside"}>
                    {ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>) )}
                </ul>
            </CardContent>
            <CardFooter className={cn("mt-auto mb-12 h-32 bg-[#FFF5D7] w-11/12 rounded-xl flex items-center p-0 justify-center shadow-2xl border max-w-[60rem]")}>
                <div className={"w-8/12"}>
                    <h1 className={"text-3xl"}>Ready for Recipe?</h1>
                    <p className={""}>Generate a recipe from your list of ingredients</p>
                </div>
                <Button type={"button"} className={"w-2/12"}>Generate</Button>
            </CardFooter>
        </Card>
    );
};
