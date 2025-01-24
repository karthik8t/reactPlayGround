export const FactsContent = ({ facts }: { facts: string[] }) => {
    return <>
        <div
            className="absolute -right-20 top-1/3 w-40 h-40 bg-[url('src/factCard/assets/react.svg')] bg-contain bg-no-repeat animate-spin blur-sm"
        ></div>
        <div className="relative z-10">
            <ol className="list-disc text-2xl text-white pl-8">
                {facts.map((data, index) => <li key={index}>{data}</li>)}
            </ol>
        </div>
    </>;
};