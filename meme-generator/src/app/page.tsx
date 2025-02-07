"use client"
import {Header} from "@/components/header";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import MemeForm from "@/components/MemeForm";
import {useState} from "react";
import {z} from "zod";
import {memeSchema} from "@/types/types";
import Canvas from "@/components/Canvas";


export default function Home() {
    const [memeData, setMemeData] = useState({header:"All: AI, Automation", footer:"Me: React tutorial"})
  return (
      <>
          <Header/>
          <div className={"bg-secondary flex justify-center items-center flex-grow"}>
              <Card className={"w-[700] bg-[#F4F6FF]"}>
                  <CardHeader>
                      <h1>Try Meme generator</h1>
                  </CardHeader>
                  <CardContent className={"w-10/12"}>
                      <MemeForm defaultValues={memeData} onGenerate={(data: z.infer<typeof memeSchema>) => setMemeData(data)}/>
                  </CardContent>
                  <CardFooter className={"w-full flex justify-center"}>
                      <Canvas width={300} height={300} header={memeData.header} footer={memeData.footer} src={"/chill-guy-2.png"}/>
                  </CardFooter>
              </Card>

          </div>
      </>
  );
}
