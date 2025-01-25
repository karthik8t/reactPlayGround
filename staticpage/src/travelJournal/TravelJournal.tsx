import {Plane} from "lucide-react";
import {ModeToggle} from "@/components/theme/mode-toggle.tsx";
import data from "@/travelJournal/assets/data.ts"
import {TravelContent} from "@/travelJournal/TravelContent.tsx";

type Props = {};

export default function TravelJournal({}: Props) {
    return (
        <div className={"flex flex-col w-screen h-screen justify-start"}>
            <header className={"h-32 bg-primary"}>
                <div className={"flex justify-between items-center h-full"}>
                    <div className={"ml-8 flex items-center"}>
                        <span><Plane size={"2rem"}/></span>
                        <h1 className={"pl-2 text-4xl"}>Travel Journal</h1>
                    </div>
                    <div className={"mr-8"}>
                        <ModeToggle/>
                    </div>
                </div>
            </header>
            <TravelContent places={data}/>
            <footer className={"mt-auto ml-auto mr-4"}><small>@TravelJournal. all rights reserved</small></footer>
        </div>
    );
};

