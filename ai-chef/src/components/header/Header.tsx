type Props = {};
export default function Header({}: Props) {
    return (
        <header className={"w-full shadow bg-[#F4F6FF]"}>
            <nav className={"flex justify-center items-center h-40 w-full"}>
                <img src="src/components/header/assets/robo.png" alt="chef logo" className={"w-32"}/>
                <strong className={"text-5xl"}>AI Chef</strong>
            </nav>
        </header>
    );
};
