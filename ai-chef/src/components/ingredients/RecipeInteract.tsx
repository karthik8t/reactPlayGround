import {CardFooter} from "@/components/ui/card.tsx";
import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";

interface GenerateRecipeProps {
    onInteract?: () => void,
    buttonContent?: string
}

export function RecipeInteract({onInteract, buttonContent}: GenerateRecipeProps) {
    return <CardFooter className={cn(
        "mt-auto mb-12 py-6 px-8",
        "min-h-[100px]",
        "bg-gradient-to-r from-blue-500/5 to-purple-500/5",
        "w-11/12 rounded-xl",
        "flex items-center justify-between",
        "shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
        "border border-gray-100",
        "max-w-[60rem] generateRecipe"
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
            onClick={onInteract}
        >
            {buttonContent}
        </Button>
    </CardFooter>;
}