"use client"
import {Header} from "@/components/header";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import MemeForm from "@/components/MemeForm";
import {useEffect, useState} from "react";
import {z} from "zod";
import {ImgFlip, memeSchema} from "@/types/types";
import Canvas from "@/components/Canvas";


export default function Home() {
    const [memeData, setMemeData] = useState({
        header: "Everyone: AI, automation, future tech",
        footer: "Me: Adjusting CSS in my 1-year-old project"
    })
    const [memeUrls, setMemeUrls] = useState(["/chill-guy-2.png"])
    const [currentMeme, setCurrentMeme] = useState("/chill-guy-2.png");
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                const memes: ImgFlip = data as ImgFlip
                const urls: string[] = memes.data.memes.map(meme => meme.url);
                setMemeUrls(urls)
            })
    }, []);
    return (
        <>
            <Header/>
            <div className={"bg-secondary flex justify-center items-center flex-grow"}>
                <Card className={"w-[700] bg-[#F4F6FF]"}>
                    <CardHeader>
                        <h1 className={"text-3xl"}>Try Meme generator</h1>
                    </CardHeader>
                    <CardContent className={"w-10/12"}>
                        <MemeForm defaultValues={memeData}
                                  onGenerate={(data: z.infer<typeof memeSchema>) => setMemeData(data)}
                                  onRefresh={() => setCurrentMeme(memeUrls[[Math.floor(Math.random() * memeUrls.length)]])}/>
                    </CardContent>
                    <CardFooter className={"w-full flex justify-center"}>
                        <Canvas width={300} height={300} header={memeData.header} footer={memeData.footer}
                                src={currentMeme}/>
                    </CardFooter>
                </Card>

            </div>
        </>
    );
}
