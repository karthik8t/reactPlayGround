type Props = {
    ingredients: string[];
};

export default function IngredientItems({ ingredients }: Props) {
    return (
        <div className="space-y-4 ingredientItem">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Ingredients in hand:
            </h1>
            <ul className="space-y-2 ml-6 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                {ingredients.map((ingredient, index) => (
                    <li 
                        key={index}
                        className="text-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                    >
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    );
}
