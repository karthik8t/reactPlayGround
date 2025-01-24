import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card'
import {cn} from '@/lib/utils'
import {Avatar, AvatarFallback, AvatarImage} from '@radix-ui/react-avatar'
import {FactsContent} from "@/factCard/components/FactsContent.tsx";

type Props = {}

const facts: string[] = [
    "React is Reusable UI component framework",
    "Using Frameworks like nextJs will improve React",
    "Using Component libraries and tools will help improve UI and UX",
    "React puts all the JSX inside root element which is provided while creating React root Object",
    "In React you can only pass one element while rendering into root element",
    "React is declarative(what and how to do) and not imperative which involves providing instructions on how to do",
    "React is composable, meaning we can reuse components"
];

const FactCard = (props: Props) => {
    return (
        <Card className={cn("w-1/2 flex flex-col bg-[#070F2B]")}>
            <CardHeader className={cn(" flex flex-row")}>
                <Avatar className={cn("w-12")}>
                    <AvatarImage src='src\factCard\assets\react.svg' className={cn("w-12 h-12")}/>
                    <AvatarFallback>React</AvatarFallback>
                </Avatar>
                <h1 className='pl-4 text-4xl text-center text-[#F5F5F5]'><b>ReactFacts</b></h1>
            </CardHeader>
            <CardContent className={cn("mt-auto relative overflow-hidden")}>
                <FactsContent facts={facts}/>
            </CardContent>
            <CardFooter className={cn("mt-auto text-sm text-white")}>made using ShadCn</CardFooter>
        </Card>
    )
}

export default FactCard