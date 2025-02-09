import Image from "next/image";
import {Julius_Sans_One} from "next/font/google";

const juliusFont = Julius_Sans_One({
    weight: '400'
})

export function Header() {
    return <div className={"flex justify-center items-center gap-9 bg-primary py-4"}>
        <Image
            src="/chill-guy-1.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-lg shadow-lg cursor-pointer hover:opacity-80"
        />
        <h1 className={`${juliusFont.className} text-6xl`}>Meme Generator</h1>
    </div>;
}